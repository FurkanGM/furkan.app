import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative m-3 aspect-square w-[5.625rem] flex-shrink-0 overflow-hidden rounded-full ring-4 ring-primary ring-offset-8 ring-offset-athens-gray-100 dark:ring-offset-ebony-900">
      <Image src={"/assets/images/avatar.jpeg"} alt={"Avatar"} width={90} height={90} />
    </div>
  );
};

export default Avatar;
