import React from 'react';
import '../index.css';

const posts = [
  {
    id: 1,
    title: "Impact of the Election on Healthcare",
    author: "John Doe",
    content: "How do you think the upcoming election will affect healthcare policies? I believe that more affordable healthcare is crucial for our future.",
    date: "2024-09-29",
  },
  {
    id: 2,
    title: "Voting Accessibility Issues",
    author: "Jane Smith",
    content: "I have been reading about voting accessibility issues in various states. What can we do to ensure everyone has access to vote?",
    date: "2024-09-28",
  },
  {
    id: 3,
    title: "Climate Change Policies in the Election",
    author: "Mike Johnson",
    content: "With climate change being a hot topic this election, what policies do you want to see implemented by the candidates?",
    date: "2024-09-27",
  },
];

const DiscussionBoard = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Discussion Board</h1>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-500">By {post.author} on {post.date}</p>
          <p className="mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussionBoard;
