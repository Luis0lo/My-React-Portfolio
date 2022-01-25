import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const UserAuth = () => {
  return (
    <div>
      <div>
        <LoginButton />
      </div>
      <div>
        <LogoutButton />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default UserAuth;
