import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from './contex/AuthContext';

export const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(chats);
  return (
    <div className="chats">
      <div className="usersChats">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgECtsr3QRWG5T442iYnsUuCFmnIOgJL6mQ&usqp=CAU"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jack</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};
