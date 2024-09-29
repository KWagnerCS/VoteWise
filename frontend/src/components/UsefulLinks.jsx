// src/UsefulLinks.js

import React from 'react';

// Sample links data
const links = [
  {
    id: 1,
    title: "Vote.gov",
    description: "Find out how to vote in your state, register, and learn about the voting process.",
    image: "https://via.placeholder.com/300x200?text=Vote.gov",
    url: "https://www.vote.gov/"
  },
  {
    id: 2,
    title: "Can I Vote?",
    description: "Check your registration status and learn about voting in your state.",
    image: "https://via.placeholder.com/300x200?text=Can+I+Vote",
    url: "https://www.canivote.org/"
  },
  {
    id: 3,
    title: "Ballotpedia",
    description: "Comprehensive resource for information on elections, candidates, and ballot measures.",
    image: "https://via.placeholder.com/300x200?text=Ballotpedia",
    url: "https://ballotpedia.org/"
  },
  {
    id: 4,
    title: "Vote411.org",
    description: "Get information on how to vote, what’s on your ballot, and how to contact local officials.",
    image: "https://via.placeholder.com/300x200?text=Vote411",
    url: "https://www.vote411.org/"
  },
  {
    id: 5,
    title: "USA.gov",
    description: "The U.S. government's official web portal, providing access to federal, state, and local resources.",
    image: "https://via.placeholder.com/300x200?text=USA.gov",
    url: "https://www.usa.gov/"
  },
];

const UsefulLinks = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Useful Government Links</h1>
      <div className="flex flex-col gap-4">
        {links.map(link => (
          <div key={link.id} className="flex border p-4 mb-4 rounded shadow">
            <img src={link.image} alt={link.title} className="w-1/3 rounded-l" />
            <div className="p-4 w-2/3">
              <h2 className="text-lg font-semibold">{link.title}</h2>
              <p className="mt-1">{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">Visit</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
