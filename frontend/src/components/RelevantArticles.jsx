import React from 'react';
import '../index.css';

// Sample articles data
const articles = [
  {
    id: 1,
    title: "Understanding the Electoral Process",
    author: "Alice Cooper",
    image: "https://via.placeholder.com/300x200?text=Electoral+Process",
    summary: "A deep dive into how the electoral process works in the U.S., including primaries and general elections.",
    link: "#"
  },
  {
    id: 2,
    title: "Voter Turnout: Why It Matters",
    author: "Bob Williams",
    image: "https://via.placeholder.com/300x200?text=Voter+Turnout",
    summary: "An analysis of voter turnout trends over the years and their impact on election outcomes.",
    link: "#"
  },
  {
    id: 3,
    title: "Debate Highlights: Key Moments",
    author: "Catherine Zeta",
    image: "https://via.placeholder.com/300x200?text=Debate+Highlights",
    summary: "Recap of the most significant moments from the latest debates and what they could mean for voters.",
    link: "#"
  },
];

const RelevantArticles = () => {
  return (
    <div className="max-w-4xl mx-auto gap-4">
      <h1 className="text-2xl font-bold mb-4">Relevant Articles</h1>
      <div className="flex flex-col gap-4">
        {articles.map(article => (
          <a 
            key={article.id} 
            href={article.link} 
            className="flex border p-4  rounded shadow transition-transform transform hover:scale-105" 
            style={{ textDecoration: 'none' }} // Removes underline
          >
            <img src={article.image} alt={article.title} className="w-1/3 rounded-l" />
            <div className="p-4 w-2/3">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-500 text-sm">By {article.author}</p>
              <p className="mt-2">{article.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelevantArticles;
