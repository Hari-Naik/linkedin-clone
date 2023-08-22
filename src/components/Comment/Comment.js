import { Avatar } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import CommentItem from "./CommentItem";

const Comment = ({ userName, userId, postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const dbInstance = collection(db, "posts", postId, "comments");

  useEffect(() => {
    getDocs(query(dbInstance, orderBy("timeStamp", "desc"))).then(data => {
      setComments(
        data.docs.map(item => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, [dbInstance, comments]);

  const handleComment = e => {
    setComment(e.target.value);
  };

  const postComment = async e => {
    e.preventDefault();

    addDoc(dbInstance, {
      comment,
      userName,
      userId,
      timeStamp: serverTimestamp(),
    });
    setComment("");
  };

  return (
    <section className="w-full my-2 flex flex-col space-y-6">
      <div className="flex items-start w-full h-max space-x-2">
        <Avatar />
        <form
          onSubmit={postComment}
          className="w-full flex flex-col items-start gap-2">
          <input
            className=" border-y outline-none border-gray-300 w-full p-2 rounded-full"
            type="text"
            value={comment}
            onChange={handleComment}
            placeholder="Add a comment.."
          />
          {comment && (
            <button
              type="submit"
              className="text-white bg-[#0A66C2]  px-3 rounded-full inline">
              Post
            </button>
          )}
        </form>
      </div>
      <div>
        {comments.map(item => (
          <CommentItem
            key={item.id}
            comment={item.comment}
            userName={item.userName}
            timeStamp={item.timeStamp}
            postId={postId}
            commentId={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Comment;
