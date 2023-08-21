import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

type SocialMediaProps = React.ComponentPropsWithoutRef<"div">;

const SocialMedia = ({ className, ...props }: SocialMediaProps) => {
  return (
    <div className={`flex ${className}`} {...props}>
      <a
        href="https://github.com/FurkanGM"
        target="_blank"
        aria-label="Furkan Gezek Github account"
      >
        <AiOutlineGithub size={24} />
      </a>
    </div>
  );
};

export default SocialMedia;
