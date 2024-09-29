// src/UsefulLinks.js

import React from 'react';

// Sample links data
const links = [
  {
    id: 1,
    title: "Vote.org",
    description: "Find out how to vote in your state, register, and learn about the voting process.",
    image: "https://via.placeholder.com/300x200?text=Vote.org",
    url: "https://www.vote.org/"
  },
  {
    id: 2,
    title: "USA.gov",
    description: "The U.S. government's official web portal, providing access to federal, state, and local resources.",
    image: "https://via.placeholder.com/300x200?text=USA.gov",
    url: "https://www.usa.gov/"
  },
  {
    id: 3,
    title: "Ballotpedia",
    description: "Comprehensive resource for information on elections, candidates, and ballot measures.",
    image: "https://via.placeholder.com/300x200?text=Ballotpedia",
    url: "https://ballotpedia.org/United_States_Senate_elections,_2024"
  },
  {
    id: 4,
    title: "Rock the Vote",
    description: "Get information on how to vote and participate in elections.",
    image: "https://via.placeholder.com/300x200?text=Rock+the+Vote",
    url: "https://www.rockthevote.org/"
  },
  {
    id: 5,
    title: "League of Women Voters",
    description: "Empowering voters and defending democracy.",
    image: "https://via.placeholder.com/300x200?text=League+of+Women+Voters",
    url: "https://www.lwv.org/"
  },
  {
    id: 6,
    title: "Election Assistance Commission (EAC)",
    description: "Providing information on federal election laws and resources.",
    image: "https://via.placeholder.com/300x200?text=EAC",
    url: "https://www.eac.gov/"
  },
];

const UsefulLinks = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Useful Government Links</h1>
      <div className="flex flex-col gap-4">
        {links.map(link => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex border p-4 rounded shadow transition-transform transform hover:scale-105" 
          >
            <img src={link.image} alt={link.title} className="w-1/3 rounded-l" />
            <div className="p-4 w-2/3">
              <h2 className="text-lg font-semibold">{link.title}</h2>
              <p className="mt-1">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
