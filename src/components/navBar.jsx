import React, { useState } from "react";
import Profile from "./profile";
import PostList from "./postList";

function NavBar({ handlePostListClick, handleProfileClick }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar bg-body-secondary d-flex container-fluid">
      <div className="container">
        <a className="navbar-brand">
          <i
            className="bi bi-lightning-charge-fill m-2"
            onClick={handlePostListClick}
          >
            three pics
          </i>
          <i
            className="bi bi-person-circle"
            onClick={handleProfileClick}
          ></i>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;