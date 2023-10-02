import React, { useState } from "react";
import NavBar from "./components/navBar.jsx";
import PostList from "./components/postList";
import Filters from "./components/filters";
import Profile from "./components/profile";

function App() {
  console.log("rendering App");
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handlePostListClick = () => {
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const searchPost = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  return (
    <>
      <div className="container">
        <br />
        <h5>Descripción</h5>
        <h4>
          El objetivo del ejercicio es la construcción de una aplicación web
          React.js con diferentes componentes que tenga como resultado la
          siguiente interfaz de usuario (Mobile first):
        </h4>
        <br />
        <NavBar
          handlePostListClick={handlePostListClick}
          handleProfileClick={handleProfileClick}
        />
        <Filters search={search} searchPost={searchPost} />
        {showProfile ? <Profile /> : <PostList search={search} />}
      </div>
    </>
  );
}

export default App;