import { motion } from "framer-motion";
import React from "react";

function InputOption({ title, Icon, color, hasLiked, onClick }) {
  const getTextColor = () => {
    switch (title) {
      case "Photo":
        return `text-Photo-700`;
      case "Video":
        return `text-Video-700`;
      case "Event":
        return `text-Event-700`;
      case "Write article":
        return `text-article-700`;
      default:
        return `${hasLiked ? "text-blue-500" : "text-gray-500"}`;
    }
  };

  const textColor = getTextColor();

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex items-center mx-auto space-x-3 cursor-pointer w-max p-2 rounded-lg outline-none border-none hover:bg-[#F2F2F2]">
      <Icon className={`${textColor} !h-6 !w-6`} />
      <p
        className={`${
          color
            ? hasLiked
              ? " text-blue-500"
              : "text-gray-500"
            : "text-[00000099]"
        } 
				  
		text-sm font-semibold`}>
        {title}
      </p>
    </motion.button>
  );
}

export default InputOption;
