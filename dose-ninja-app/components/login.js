import React, { useState } from 'react';
import { auth } from '../firebase';
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
