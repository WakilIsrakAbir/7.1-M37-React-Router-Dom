import { use } from 'react';
import { } from 'react';

const Users2 = ({ usersPromise }) => {
    const users = use(usersPromise);
    console.log("users 2 suspense data load", users);
  return <div>
    <h2>This Is User Two</h2>
  </div>;
};

export default Users2;