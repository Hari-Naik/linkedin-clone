import React, { useState } from "react";
import {
  AddBox,
  AppsOutlined,
  BusinessCenter,
  Chat,
  Group,
  HomeRounded,
  Notifications,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import HeaderLink from "./HeaderLink";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [showSingOutBtn, setShowSignOutBtn] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    Cookies.remove("token");
    navigate("/login");
  };

  const onClickAvatar = () => {
    setShowSignOutBtn(prevState => !prevState);
  };

  return (
    <>
      <header className="md:sticky top-0 z-50 flex items-center md:justify-between lg:justify-around h-14 w-full bg-white shadow-sm">
        {/* left */}
        <div className="flex items-center w-full md:min-w-max md:max-w-xs lg:max-w-sm h-full space-x-2 px-2">
          <Link to="/">
            <img
              src="/images/linkedin.png"
              alt="logo"
              className="hidden md:flex h-8"
            />
          </Link>

          <motion.div
            whileTap={{ scale: 0.99 }}
            className="relative h-full md:hidden flex items-center">
            <Avatar onClick={onClickAvatar} className="!h-8 !w-8" />
            {showSingOutBtn && (
              <button
                onClick={signOut}
                className="absolute top-14 w-20 h-7 rounded-full bg-blue-500 text-white text-xs font-semibold transition-all duration-200">
                Sign Out
              </button>
            )}
          </motion.div>
          <div className="flex items-center flex-1 bg-[#eef3f8] px-2 h-9">
            <SearchRounded className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent py-1 px-2 w-[100%] outline-none border-none"
            />
          </div>
          <Chat className="flex md:!hidden text-gray-500" />
        </div>

        {/* right */}
        <nav className="absolute bottom-0 bg-white shadow-lg md:shadow-none md:relative w-full md:w-max h-12 md:h-full flex items-center md:justify-end md:divide-x divide-gray-300 z-50 ">
          <div className="flex items-end h-12 md:h-full justify-between w-full md:justify-normal md:space-x-10 lg:space-x-6 px-2 md:px-4 ">
            <HeaderLink Icon={HomeRounded} title="Home" active />
            <HeaderLink Icon={Group} title="My Network" />
            <HeaderLink Icon={AddBox} title="Post" />
            <HeaderLink Icon={Notifications} title="Notifications" />
            <HeaderLink Icon={BusinessCenter} title="Jobs" />
            <HeaderLink Icon={Chat} title="Messaging" hidden />
            <motion.div
              whileTap={{ scale: 0.99 }}
              className="relative h-12 hidden md:flex">
              <HeaderLink
                Icon={Avatar}
                title="Me"
                hidden
                onClick={onClickAvatar}
              />
              {showSingOutBtn && (
                <button
                  onClick={signOut}
                  className="absolute top-14 w-20 h-7 rounded-full bg-blue-500 text-white text-xs font-semibold">
                  Sign Out
                </button>
              )}
            </motion.div>
          </div>
          <div className="hidden md:flex md:items-end px-4 h-full ">
            <HeaderLink Icon={AppsOutlined} title="Work" />
          </div>
        </nav>
      </header>

      {/* {
				showHeader && (
					<div className='hidden md:flex sticky top-[56px] z-[100] bg-white shadow-lg  items-center md:justify-between lg:justify-around w-full p-2 border-t border-gray-300 transform translate-y-0'>
						<div className='flex space-x-2'>
							<Avatar className='!h-6 !w-6' />
							<div>
								<h2 className='text-xs font-semibold'>HariNaik Meravath</h2>
								<p className='text-xs font-sans'>Frontend Developer | React Js, JavaScript, Redux</p>
							</div>
						</div>

						<div className='flex items-center space-x-2 mt-2'>
							<button className='bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white profile_button'>Open to</button>
							<button className='bg-transparent border border-[#0A66C2]  text-[#0A66C2] hover:bg-blue-200 profile_button'>Add profile section</button>
							<button className='bg-transparent border border-[#00000099] text-[#00000099] hover:bg-[#00000099]/20 profile_button'>More</button>

						</div>
					</div>
				)} */}
    </>
  );
}

export default Header;
