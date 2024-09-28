import React from 'react';
import '../index.css';

const Header = () => {
    return (
        <header className="flex py-4 px-32 items-center text-xl justify-between font-medium">
            <div className="flex justify-center items-center text-nowrap">
                <img src="https://via.placeholder.com/150" alt="Placeholder Logo" className="max-h-24 w-auto" />
                <div className="text-6xl p-5 font-bold">Vote Wise</div>
            </div>
            <ul className="flex gap-20">
                <li className="">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
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
