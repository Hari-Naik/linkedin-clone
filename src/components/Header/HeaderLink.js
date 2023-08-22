import React from "react";
import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom'

function HeaderLink({ Icon, title, hidden, onClick, active }) {
  const link = title === "Home" ? "/" : `/${title.toLowerCase()}`;

  if (title === "Me") {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center h-full ${
          active && "text-black border-b-[2px] border-black"
        } flex flex-col items-center justify-center text-gray-600 cursor-pointer hover:text-black ${
          title === "Post" && "md:hidden"
        } ${hidden && "hidden md:flex"}`}>
        <Icon className="!h-6 !w-6" />
        <h4 className="text-xs md:hidden lg:flex">{title}</h4>
      </div>
    );
  }

  return (
    <Link to={link} className={`${title === "Post" && "md:hidden"}`}>
      <div
        onClick={onClick}
        className={`flex flex-col items-center pb-1 px-1 h-full ${
          active &&
          "text-black border-b-[2px] md:border-b-0 lg:border-b-[2px] border-black"
        }  text-[#00000099] cursor-pointer hover:text-black ${
          title === "Post" && "md:hidden"
        } ${hidden && "hidden md:flex"}`}>
        <Icon className="!h-6 !w-6" />
        <h4 className="text-xs md:hidden lg:flex">{title}</h4>
      </div>
    </Link>
  );
}

export default HeaderLink;
