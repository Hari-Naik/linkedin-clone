import { Delete, MoreHoriz } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import Moment from "react-moment";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentItem = ({ comment, userName, timeStamp, postId, commentId }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const deleteComment = async () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      deleteDoc(doc(db, "posts", postId, "comments", commentId));

      toast.success("Comment deleted");
    }
  };
  return (
    <div className="relative flex items-start w-full">
      <Avatar />

      <div className="flex flex-1 justify-between bg-[#F2F2F2] mx-2 p-2 rounded-md">
        <div>
          <h2 className="text-sm text-[#000000E6] font-semibold">{userName}</h2>
          <p className=" text-xs text-[#00000099]">Frontend Developer</p>
          <p className="text-sm text-[#000000E6] mt-2">{comment}</p>
        </div>
        <div className="flex items-start text-xs text-[#00000099]">
          <Moment fromNow>{timeStamp?.toDate()}</Moment>

          <MoreHoriz
            className="!h-4 cursor-pointer"
            onClick={() => setShowDropdown(val => !val)}
          />
        </div>
      </div>
      {showDropdown && (
        <div className="absolute bg-white rounded-md right-3 top-7 shadow-md">
          <div
            onClick={deleteComment}
            className="flex items-center text-gray-500 p-2 hover:bg-[#F2F2F2] cursor-pointer space-x-2">
            <Delete className="!h-[18px]" />
            <p className="text-sm">Delete comment</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
