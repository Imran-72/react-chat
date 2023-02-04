import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setErr(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleUserSubmit}>
          <input onChange={(e) => SetEmail(e.target.value)} type="text" placeholder="email" />
          <input
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button type="submit">Sing Ip</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don`t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};
