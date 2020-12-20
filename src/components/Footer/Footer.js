import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
            <p>Source code: <a href={"https://github.com/ashish-rama/Airbnb-Clone-JavaScript"}>Github</a></p>
        </div>
    )
}

export default Footer
