import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
              Write blogs from anywhere
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Just login with your Google account{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                explore and create amazing blogs
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              inventore tempore, minima vero sit voluptatibus accusamus expedita
              quod magnam fugiat, consectetur doloribus sint, eligendi nihil
              laboriosam accusantium. Tempora, vitae qui.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                onClick={() => navigate("/blogs")}
              >
                Explore
              </a>
            </div>
          </div>
          {/* <div className="mt-14">
            <img
              src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
