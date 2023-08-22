import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import InputOption from "../InputOption";
import {
  ChatOutlined,
  Delete,
  MoreHoriz,
  SendOutlined,
  ShareOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

import Moment from "react-moment";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import Cookies from "js-cookie";
import Comment from "../Comment/Comment";

import { getUser } from "../../libs/getUser";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";

function Post({ id, name, text, imageUrl, videoUrl, timestamp }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [likes, setLikes] = useState([]);

  const user = getUser();
  const token = Cookies.get("token");

  const dbInstance = collection(db, "posts", id, "likes");

  useEffect(() => {
    getDocs(dbInstance).then(data => {
      setLikes(
        data.docs.map(item => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, [dbInstance]);

  useEffect(() => {
    setHasLiked(likes.findIndex(like => like.id === user.uid) !== -1);
  }, [likes, user.uid]);

  async function likePost() {
    if (token) {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", user.uid), {
          username: name,
        });
      }
    }
  }

  const commentPost = () => {
    setHasCommented(true);
  };

  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", id));
      if (imageUrl) {
        deleteObject(ref(storage, `posts/${id}/image`));
      }
      //   router.push("/");
    }
    toast.success("Post deleted");
  }

  return (
    <li className="relative w-full h-max p-2 bg-white rounded-lg border border-gray-300">
      <div className="flex space-x-2 p-2">
        <Avatar />
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{name}</span>
            <small>
              <Moment fromNow>{timestamp?.toDate()}</Moment>
            </small>
          </div>
          <IconButton onClick={() => setShowDropdown(value => !value)}>
            <MoreHoriz />
          </IconButton>
        </div>
      </div>
      <p className="p-2 leading-snug">{text}</p>
      {(imageUrl || videoUrl) && (
        <div className="w-full h-[270px] mt-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="post"
              className="w-full h-full"
              loading="lazy"
            />
          )}
          {videoUrl && (
            <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
          )}
        </div>
      )}
      <div>
        <div className="flex items-center justify-around w-full mt-2">
          <InputOption
            Icon={hasLiked ? ThumbUp : ThumbUpAltOutlined}
            title="Like"
            color={"gray"}
            hasLiked={hasLiked}
            onClick={likePost}
          />
          <InputOption
            Icon={ChatOutlined}
            title="Comment"
            color="gray"
            onClick={commentPost}
          />
          <InputOption Icon={ShareOutlined} title="Share" color="gray" />
          <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
        {hasCommented && (
          <Comment userName={name} userId={user.uid} postId={id} />
        )}
      </div>

      {showDropdown && (
        <div className="absolute bg-white rounded-md right-1 top-12 shadow-md">
          <div
            onClick={deletePost}
            className="flex items-center text-gray-500 p-2 hover:bg-[#F2F2F2] cursor-pointer space-x-2">
            <Delete className="!h-[18px]" />
            <p className="text-sm">Delete post</p>
          </div>
        </div>
      )}
    </li>
  );
}

export default Post;
