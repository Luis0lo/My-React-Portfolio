import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;

// const data = { email: "luis@gmail.com",
// email_verified: true,
// family_name: "Rodrigues",
// given_name: "Luis",
// locale: "en-GB",
// name: "Luis Rodrigues",
// nickname: "luiscvrodrigues",
// picture: "https://lh3.googleusercontent.com/a-/AOh14GgiIBKsDUK8jGh9wzn7yJsI897gSzeNIvImkD1SIA=s96-c",
// sub: "google-oauth2|117441255094162799546",
// updated_at: "2022-01-25T19:57:54.418Z"}
