import React from "react";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <>
      <div className="flex justify-center p-4">
        <div className="m-4">Sign in With Google</div>
        <button
          type="button"
          onClick={signInWithGoogle}
          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default Login;
