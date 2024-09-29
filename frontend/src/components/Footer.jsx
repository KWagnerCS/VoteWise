import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                </p>
                <p>&copy; {new Date().getFullYear()} VoteWise</p>
            </div>
        </footer>
    );
};

export default Footer;
