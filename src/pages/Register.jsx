import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import AddAvatar from '../img/addAvatar.png';
import { auth, db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

// import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
  const [displayName, SetDisplayName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[3].files[0];
    console.log(file);
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });

      console.log(res.user);
    } catch (err) {
      const errorMessage = err.message;
      console.log(errorMessage);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form onSubmit={(e) => handleUserSubmit(e)}>
          <input
            onChange={(e) => SetDisplayName(e.target.value)}
            type="text"
            placeholder="name"
            value={displayName}
          />
          <input
            onChange={(e) => SetEmail(e.target.value)}
            type="text"
            placeholder="email"
            value={email}
          />
          <input
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            placeholder="password"
            value={password}
          />
          <input
            // onChange={(e) => SetFile(e.target.value)}
            style={{ display: 'none' }}
            type="file"
            id="file"
            // value={file}
          />
          <label htmlFor="file">
            <img src={AddAvatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sing Up</button>
          {loading && 'Uploading and compressing the image please wait...'}
          {err && <span>Something went wrong</span>}
        </form>
        <p>{/* You do have an account? <Link to="/register">Login</Link> */}</p>
      </div>
    </div>
  );
};
