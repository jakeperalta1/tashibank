import React, { useState } from 'react';

function Login() {
  const [accountNumber, setAccountNumber] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For simplicity, let's assume the authentication is successful
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <h2>Welcome, {accountNumber}!</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Account Number:
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <button type="submit" className="btn btn-info mr-50">Sign In</button>
        </form>
      )}
    </div>
  );
}

export default Login;
