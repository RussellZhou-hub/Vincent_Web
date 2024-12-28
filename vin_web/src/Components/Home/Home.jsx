import React from 'react';
import LoginSignup from '../LoginSignup/LoginSignup';

const Home = () => {
    return <div>
        <h2>Home Page</h2>
        <a href="file/Protocol_Spirit.exe" download="file.exe">
            Download image
        </a>
        <img src={`${process.env.PUBLIC_URL}/img/img_1.png`} alt="logo192.png" />
        </div>
        
};

export default Home;