// ElectionCard.jsx
import React from 'react';

const ElectionCard = ({ election }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
      <h2 className="text-xl font-semibold text-gray-800">{election.name}</h2>
      <p className="text-gray-600 mt-2">Date: {election.electionDay}</p>
    </div>
  );
};

export default ElectionCard;
