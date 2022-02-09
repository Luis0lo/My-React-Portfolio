import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile1 from './Profile1';

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
        <Profile1 />
      </div>
    </div>
  );
};

export default UserAuth;
