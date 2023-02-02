import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar">
      <span>React Chat</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgECtsr3QRWG5T442iYnsUuCFmnIOgJL6mQ&usqp=CAU"
          alt=""
        />
        <span>Jack</span>
        <button>logout</button>
      </div>
    </div>
  );
};
