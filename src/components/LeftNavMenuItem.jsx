import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 rounded-lg hover:bg-white/[0.15] flex items-center px-3 "+className}
    onClick={action}
    >
      <span className="mr-5 text-xl">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
