import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase.config";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <>
      {!isAuth ? (
        <h2 className="flex justify-center text-3xl font-semibold text-gray-600">
          Login to see exciting Blog Posts
        </h2>
      ) : (
        <>
          <h2 className="flex justify-center text-3xl font-semibold text-gray-600">
            Recent Blog Posts
          </h2>
          <h2 className="flex justify-center text-3xl font-semibold text-gray-600">
            Welcome! {auth.currentUser.displayName}
          </h2>
        </>
      )}

      <section class="text-gray-600 body-font overflow-hidden ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            {postList.map((post) => {
              return (
                <>
                  <div class="p-12 flex flex-col md:w-1/2 items-start hover:bg-yellow-100 cursor-pointer rounded-xl ">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                      {post.title}
                    </h2>
                    <p class="leading-relaxed mb-8">{post.postText}</p>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                      {isAuth && post.author.id === auth.currentUser.uid && (
                        <a
                          onClick={() => {
                            deletePost(post.id);
                          }}
                          class="text-red-500 inline-flex items-center"
                        >
                          Delete Post
                        </a>
                      )}
                    </div>
                    <a class="inline-flex items-center">
                      <img
                        alt="blog"
                        src={post.author.imgUrl}
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          {post.author.name}
                        </span>
                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                          CONTENT WRITER
                        </span>
                      </span>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
