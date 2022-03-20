const ErrorMessage = ({ message }) => {
  return (
    <div className="p-1">
      <p className="font-light text-tiny text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;
