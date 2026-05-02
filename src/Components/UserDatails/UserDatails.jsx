import { } from 'react';
import { useLoaderData } from 'react-router';

const UserDatails = () => {

    const user = useLoaderData();

    const { website } = user;
    return (
        <div>
            <h2>Hello From User Details</h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDatails;