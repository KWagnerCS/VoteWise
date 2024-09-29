import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const MainHeader = () => {
    const location = useLocation();
    
    return (
        <header className="flex py-4 px-32 items-center text-xl justify-between font-medium">
            <div className="flex justify-center items-center text-nowrap">
                <img src="https://via.placeholder.com/150" alt="Placeholder Logo" className="max-h-24 w-auto" />
                <div className="text-6xl p-5 font-bold">VoteWise</div>
            </div>
            <ul className="flex gap-20">
                <li>
                    <Link
                        to="/guide"
                        className={`hover:text-blue-800 ${location.pathname === '/guide' ? 'text-blue-800 font-bold' : ''}`}
                    >
                        Voting Guide
                    </Link>
                </li>
                <li>
                    <Link
                        to="/insights"
                        className={`hover:text-blue-800 ${location.pathname === '/insights' ? 'text-blue-800 font-bold' : ''}`}
                    >
                        Candidate Insights
                    </Link>
                </li>
                <li>
                    <Link
                        to="/resources"
                        className={`hover:text-blue-800 ${location.pathname === '/resources' ? 'text-blue-800 font-bold' : ''}`}
                    >
                        Resources
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default MainHeader;
