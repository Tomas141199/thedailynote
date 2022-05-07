import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
} from "react-share";

const ShareSection = ({ urlNoticia, titulo, descripcion, categoria }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 mb-12">
      <FacebookShareButton
        url={`${urlNoticia}`}
        quote={`${titulo}`}
        hashtag={"#TheDailyNote"}
        className="duration-300 hover:scale-95"
      >
        <div className="flex items-center gap-1">
          <FacebookIcon size={"2rem"} round />
          Facebook
        </div>
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={titulo}
        url={urlNoticia}
        hashtags={["TheDailyNote", categoria]}
        className="duration-300 hover:scale-95"
      >
        <div className="flex items-center gap-1">
          <TwitterIcon size={"2rem"} round />
          Twitter
        </div>
      </TwitterShareButton>
      <LinkedinShareButton
        url={urlNoticia}
        title={titulo}
        windowWidth={750}
        windowHeight={600}
        className="duration-300 hover:scale-95"
      >
        <div className="flex items-center gap-1">
          <LinkedinIcon size={"2rem"} round />
          Linkedin
        </div>
      </LinkedinShareButton>
      <WhatsappShareButton
        url={urlNoticia}
        title={titulo}
        separator=":: "
        className="duration-300 hover:scale-95"
      >
        <div className="flex items-center gap-1">
          <WhatsappIcon size={"2rem"} round />
          Whatsapp
        </div>
      </WhatsappShareButton>

      <EmailShareButton url={urlNoticia} subject={titulo} body="body">
        <div className="flex items-center gap-1">
          <EmailIcon
            size={"2rem"}
            className="duration-300 hover:scale-95"
            round
          />
          Email
        </div>
      </EmailShareButton>
    </div>
  );
};

export default ShareSection;
