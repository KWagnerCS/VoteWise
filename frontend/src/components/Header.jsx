import React from 'react';
import '../index.css';

const Header = () => {
    return (
        <header className="flex py-4 px-32 items-center font-sans text-2xl font-medium justify-between">
            <div className="flex justify-center items-center text-nowrap">
                <img src="https://via.placeholder.com/150" alt="Placeholder Logo" className="max-h-24 w-auto" />
                <div className="text-4xl p-10">VoteWise</div>
            </div>
            <ul className="flex gap-20">
                <li className="">
                    <a className="text-blue-500 hover:text-blue-800" href="/guide">Active</a>
                </li>
                <li className="">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li className="">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li className="">
                    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
