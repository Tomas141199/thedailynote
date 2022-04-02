import { useEffect, useState, useRef } from "react";

const useClickOutside = () => {
  const [activeClass, setActiveClass] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);

  const handleClick = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setActiveClass(false);
      console.log("diste click afuera", activeClass);
    }
  };

  const toggleClass = () => {
    setActiveClass(!activeClass);
  };

  return {
    activeClass,
    wrapperRef,
    handleClick,
    toggleClass,
  };
};

export default useClickOutside;
