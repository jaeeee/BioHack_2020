import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return(
    <div>
        <h3>Welcome to the BioHack 2020</h3>
        <small>Main Page</small>
        <Link to="/users">Show list of Users</Link>
    </div>
    );
}

export default MainPage;