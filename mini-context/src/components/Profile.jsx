import React from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return <p>Welcome, {user.userName}!</p>;
}

export default Profile;