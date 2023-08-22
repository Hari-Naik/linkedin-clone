import React from "react";
import Input from "../Input";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="w-[90vw] md:w-max flex-1 h-max md:max-w-md xl:max-w-lg space-y-2 ">
      <Input />
      <Posts />
    </div>
  );
}

export default Feed;
