import { } from 'react';
import { useLoaderData } from 'react-router';

const UserDatails = () => {

    const user = useLoaderData();

    const { website,name } = user;
    return (
        <div>
            <h2>Hello From User Details</h2>
            <h5>Name: {name} </h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDatails;