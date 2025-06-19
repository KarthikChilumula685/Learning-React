import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    //const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/KarthikChilumula685')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className='text-3xl text-center text-white bg-gray-800 p-4'>
            <p>Github followers: {data.followers}</p>
            {data.avatar_url && (
                <img src={data.avatar_url} alt="avatar" width={300} className='mx-auto mt-4' />
            )}
        </div>
    );
}

export default Github;

export const gitHubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/KarthikChilumula685')
    return res.json()
}