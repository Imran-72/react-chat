import React from 'react';

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sing Ip</button>
        </form>
        <p>You don`t have an account? Register</p>
      </div>
    </div>
  );
};
