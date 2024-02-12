import React from "react";
import logo from "../assets/icon-board.svg";

export const Menu = () => {
  return (
    <>
      <aside>
        {/* Logo  */}
        <div className="fl-row p-25">
          <div className="logo-container fl-row">
            <div className="bar bar-0"></div>
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
          </div>
          <h1 className="logo-name">kanban</h1>
        </div>

        {/* Board List */}
        <div className="board-container">
          <h3 className="board-counter pl-25 pb-25">ALL BOARDS (2)</h3>
          <ul className="board-list">
            <li className="fl-row ">
              <img src={logo} alt="logo" className="logo" />
              <h4>Platform Launch</h4>
            </li>
            <li className="fl-row active">
              <img src={logo} alt="logo" className="logo" />
              <h4>QA Kanban</h4>
            </li>
            <li className="fl-row">
              <img src={logo} alt="logo" className="logo" />
              <h4>Builder Kanban</h4>
            </li>
          </ul>
        </div>
        <div className="add-board">
          <div className="fl-row">
            <i class="fa-solid fa-circle-plus fa-xl logo"></i>
            <h4>Add new board</h4>
          </div>
        </div>
      </aside>
    </>
  );
};
