import React from "react";
import Image from "next/image";

const Avatar = () => {
  return <Image src={"/assets/images/avatar.jpeg"} alt={"Avatar"} width={90} height={90} />;
};

export default Avatar;
