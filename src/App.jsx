import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth, provider } from "./firebase.config";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://www.freepnglogos.com/uploads/pencil-png/pencil-png-transparent-png-pictures-icons-and-png-2.png"
              alt="logo"
              className="w-6 h-6"
            />
            <span class="ml-3 text-xl" onClick={() => navigate("/")}>
              rohitBlogz
            </span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a class="mr-5 hover:text-yellow-400" onClick={() => navigate("/")}>
              Home
            </a>
          </nav>

          {!isAuth ? (
            <button
              class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-yellow-400 rounded text-base mt-4 md:mt-0"
              onClick={() => navigate("/login")}
            >
              Log In
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ) : (
            <>
              <a
                class="mr-5 hover:text-yellow-400 cursor-pointer"
                onClick={() => navigate("/create")}
              >
                Create Post
              </a>
              <button
                class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 "
                onClick={signUserOut}
              >
                Log Out
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </header>

      {/* <nav>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut}> Log Out</button>
        )}
      </nav> */}
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </>
  );
}

export default App;
