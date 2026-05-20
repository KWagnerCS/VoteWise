import { useState } from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const articles = [
  {
    title: 'Understanding the Electoral Process',
    author: 'VoteWise Editorial',
    summary: 'A comprehensive overview of how the U.S. electoral process works, from primaries to the general election, and how the Electoral College functions.',
    link: 'https://www.usa.gov/election',
    category: 'Voting Basics',
    readTime: '5 min read',
  },
  {
    title: 'Voter Turnout: Why Every Vote Matters',
    author: 'VoteWise Editorial',
    summary: 'An analysis of voter turnout trends and how close elections have been decided by just a handful of votes in key districts.',
    link: 'https://www.vote.org/',
    category: 'Voting Basics',
    readTime: '4 min read',
  },
  {
    title: 'How to Research Candidates Effectively',
    author: 'VoteWise Editorial',
    summary: 'Tips and strategies for finding unbiased information about candidates, understanding their platforms, and making informed choices.',
    link: 'https://ballotpedia.org/',
    category: 'Candidate Research',
    readTime: '6 min read',
  },
  {
    title: 'Your Guide to Mail-In and Early Voting',
    author: 'VoteWise Editorial',
    summary: 'Everything you need to know about alternatives to voting on election day, including deadlines, rules by state, and ballot tracking.',
    link: 'https://www.usa.gov/absentee-voting',
    category: 'How to Vote',
    readTime: '5 min read',
  },
  {
    title: 'Understanding Ballot Measures and Propositions',
    author: 'VoteWise Editorial',
    summary: 'Ballot measures can be confusing. Learn how to read and understand them so you can vote confidently on every issue.',
    link: 'https://ballotpedia.org/List_of_ballot_measures',
    category: 'Candidate Research',
    readTime: '7 min read',
  },
  {
    title: 'Voter ID Requirements by State',
    author: 'VoteWise Editorial',
    summary: 'A state-by-state guide to voter ID laws so you know exactly what to bring to your polling place on election day.',
    link: 'https://www.usa.gov/voter-id',
    category: 'How to Vote',
    readTime: '4 min read',
  },
];

const links = [
  { title: 'Vote.org', desc: 'Register to vote, check your registration status, and get election reminders.', url: 'https://www.vote.org/', logo: '/resources/Voteorg.svg' },
  { title: 'USA.gov Voting', desc: 'Official U.S. government portal for voting and election information.', url: 'https://www.usa.gov/voting-and-elections', logo: '/resources/USAGov_Logo_80px.png' },
  { title: 'Ballotpedia', desc: 'Comprehensive, nonpartisan resource for information on elections, candidates, and ballot measures.', url: 'https://ballotpedia.org/', logo: '/resources/bp-logo.svg' },
  { title: 'Rock the Vote', desc: 'Building political power for young people through voter registration and mobilization.', url: 'https://www.rockthevote.org/', logo: '/resources/RTV_white_updated-1.png' },
  { title: 'League of Women Voters', desc: 'Empowering voters and defending democracy through education and advocacy.', url: 'https://www.lwv.org/', logo: '/resources/LWVorg.svg' },
  { title: 'Election Assistance Commission', desc: 'Federal agency providing election administration guidance and resources.', url: 'https://www.eac.gov/', logo: '/resources/eacgov.png' },
];

const discussions = [
  {
    title: 'What voting issues matter most to you this election?',
    author: 'Community Moderator',
    content: 'As we approach upcoming elections, we want to hear from you: what issues are top of mind? Healthcare, education, the economy, climate change — share your thoughts and let\'s have a respectful discussion.',
    date: '2026-05-15',
    replies: 24,
  },
  {
    title: 'Tips for first-time voters — share your experiences!',
    author: 'Community Moderator',
    content: 'Voting for the first time can be nerve-wracking. If you\'ve been through it, share your tips and encouragement for new voters. What do you wish you knew before your first time?',
    date: '2026-05-10',
    replies: 18,
  },
  {
    title: 'Mail-in voting vs. in-person: pros and cons',
    author: 'Community Moderator',
    content: 'With more states expanding mail-in voting options, what\'s your preference? Share your experiences with both methods and what you\'d recommend to others.',
    date: '2026-05-05',
    replies: 31,
  },
];

const TABS = [
  { id: 'articles', label: 'Articles' },
  { id: 'links', label: 'Useful Links' },
  { id: 'discussions', label: 'Discussions' },
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <div className="container-page py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="section-title">Resources</h1>
            <p className="section-subtitle mx-auto">
              Curated articles, helpful links, and community discussions to guide
              you through every aspect of the voting process.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-1 mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl max-w-sm mx-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Articles Tab */}
          {activeTab === 'articles' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, i) => (
                  <a
                    key={article.title}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover p-6 group"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-primary">{article.category}</span>
                      <span className="text-xs text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {article.summary}
                    </p>
                    <span className="text-xs text-gray-400">By {article.author}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Useful Links Tab */}
          {activeTab === 'links' && (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover p-5 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={link.logo}
                        alt={link.title}
                        className="w-8 h-8 object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {link.desc}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {discussions.map((post, i) => (
                  <div key={post.title} className="card p-5 md:p-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.replies} replies
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
