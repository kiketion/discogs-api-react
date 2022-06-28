import React from 'react';

export default function User({ toggleLogIn }) {
  const handleLogin = () => {
    toggleLogIn();
  };
  return (
    <div className='login-cards'>
      <button className='login-button' onClick={() => handleLogin()}>
        Login Button
      </button>
    </div>
  );
}
