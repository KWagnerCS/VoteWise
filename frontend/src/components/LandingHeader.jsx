import React from 'react';
import '../index.css';

const LandingHeader = () => {
    return (
        <header className="flex py-4 px-32 items-center text-xl justify-between font-medium">
            <div className="flex justify-center items-center text-nowrap">
                <img src="https://via.placeholder.com/150" alt="Placeholder Logo" className="max-h-24 w-auto" />
                <div className="text-6xl p-5 font-bold">VoteWise</div>
            </div>
            <ul className="flex gap-20">
                <li className="">
                    <a className="hover:text-blue-800" href="/guide">Voting Guide</a>
                </li>
                <li className="">
                    <a className="hover:text-blue-800" href="/insights">Candidate Insight</a>
                </li>
                <li className="">
                    <a className="hover:text-blue-800" href="/resources">Resources</a>
                </li>
            </ul>
        </header>
    );
};

export default LandingHeader;