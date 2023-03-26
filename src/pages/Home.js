import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
export default function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  ></button>
                )}
              </div>
            </div>
            <div className="postTextContent">{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
