import React, { useEffect, useState } from 'react';
import AllUsers from '../All Users/AllUsers';


const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <AllUsers key={user.id} user={user} >  </AllUsers>)
            }
        </div>
    );
};

export default Home;