import React from 'react';
import { Chat } from '../Chat';
import { SideBar } from '../SideBar';

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};
