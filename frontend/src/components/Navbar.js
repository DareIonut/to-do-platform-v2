import React from "react";

export const NavBar = () => {
  return (
    <div className="nav fl-row p-25">
      <h1 className="project-name">Platform Launch</h1>
      <div className="nav-left fl-row">
        <button className="btn-task">
          <i class="fa-solid fa-circle-plus fa-xl logo"></i>
          Add New Task
        </button>
        <div className="dot-menu">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
    </div>
  );
};
