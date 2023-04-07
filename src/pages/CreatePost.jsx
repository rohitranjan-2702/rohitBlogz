import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        imgUrl: auth.currentUser.photoURL,
        // email: auth.currentUser.email
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="flex justify-center text-2xl font-semibold">
        Create Post
      </div>

      <div className=" p-20 ">
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
            />
          </div>

          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your content
          </label>
          <textarea
            id="text"
            rows="4"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="typee..."
          ></textarea>

          <button
            type="submit"
            onClick={createPost}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
