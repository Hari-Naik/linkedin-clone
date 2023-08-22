import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../Loader";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const dbInstance = collection(db, "posts");

  useEffect(() => {
    getDocs(query(dbInstance, orderBy("timestamp", "desc")))
      .then(data => {
        setPosts(
          data.docs.map(item => {
            return { ...item.data(), id: item.id };
          })
        );
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [dbInstance]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ul className="flex flex-col space-y-2">
      {posts.map(post => (
        <Post
          key={post?.id}
          id={post?.id}
          name={post.name}
          email={post?.email}
          text={post?.text}
          imageUrl={post.image}
          videoUrl={post.video}
          timestamp={post?.timestamp}
        />
      ))}
    </ul>
  );
}

export default Posts;
