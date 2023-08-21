import React from "react";
import Avatar from "@/components/Avatar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SocialMedia from "@/components/SocialMedia";

const MyComponent = () => {
  return (
    <div className="flex flex-wrap items-center gap-6 p-3 md:flex-nowrap">
      <Avatar />
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-shrink-0 flex-col">
            <div className="flex items-center text-3xl font-semibold">
              <span>Furkan GEZEK</span>
            </div>
            <div className="font-normal text-neutrals-700 dark:text-neutrals-20">
              Fullstack Developer
            </div>
          </div>
          <div className="mr-auto flex w-full justify-end">
            <ThemeSwitcher />
          </div>
        </div>
        <SocialMedia className="mt-2" />
      </div>
    </div>
  );
};

export default MyComponent;
