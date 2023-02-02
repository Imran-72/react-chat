import React from 'react';

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgECtsr3QRWG5T442iYnsUuCFmnIOgJL6mQ&usqp=CAU"
          alt=""
        />
        <span>Jack</span>
      </div>
    </div>
  );
};
