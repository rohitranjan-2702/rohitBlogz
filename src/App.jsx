import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Home from "./pages/Home";

import CreatePost from "./pages/CreatePost";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      {/* <nav>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut}> Log Out</button>
        )}
      </nav> */}
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/blogs" element={<Blogs isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </>
  );
}

export default App;
