import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const pathObj = useParams();
  console.log(pathObj);
  return <div>ProfilePage</div>;
}

export default ProfilePage;
