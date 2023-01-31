import React from 'react';
import AddAvatar from '../img/addAvatar.png';

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddAvatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sing Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};
