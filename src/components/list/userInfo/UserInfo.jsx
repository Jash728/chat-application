import React from "react";

const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5 mr-5">
        <img className="w-[50px] h-[50px] rounded-lg object-center" src="./avatar.png"></img>
        <h2 className="mr-3">John Doe</h2>
      </div>
      <div className="flex gap-5">
        <img className="w-5 h-5 cursor-pointer" src="./more.png"></img>
        <img className="w-5 h-5 cursor-pointer" src="./video.png"></img>
        <img className="w-5 h-5 cursor-pointer" src="./edit.png"></img>
      </div>
    </div>
  );
};

export default UserInfo;
