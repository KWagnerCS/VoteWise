import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import EligibilityQuestionnaire from '../components/EligibilityQuestionnaire';
import ElectionCountdown from '../components/ElectionCountdown';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Eligibility Check',
    desc: 'Quickly check if you\'re eligible to vote with our simple step-by-step questionnaire.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Step-by-Step Guide',
    desc: 'Follow our comprehensive 7-step voting guide complete with videos and detailed explanations.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Candidate Insights',
    desc: 'Search for your representatives and get AI-powered summaries of their backgrounds and policies.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Advisor',
    desc: 'Get instant answers to your voting questions from our AI-powered advisor, available 24/7.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: 'Resource Library',
    desc: 'Access curated resources, useful links, and educational content about the voting process.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Live Countdowns',
    desc: 'Track upcoming elections with real-time countdowns so you never miss an important voting date.',
  },
];

const stats = [
  { value: '240M+', label: 'Eligible Voters in the U.S.' },
  { value: '50+', label: 'States & Territories' },
  { value: '7', label: 'Steps to Vote Confidently' },
  { value: '100%', label: 'Free & Unbiased' },
];

const LandingPage = () => {
  const [showEligibility, setShowEligibility] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/flagrealsky.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80" />

        {/* Content */}
        <div className="relative z-10 container-page text-center py-20">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white/80 text-sm font-medium mb-6 border border-white/10">
              Your nonpartisan voting companion
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Your Voice.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Your Vote.
              </span>{' '}
              Your Future.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Navigate the voting process with confidence. From checking eligibility to
              understanding your ballot, VoteWise is here to guide you every step of the way.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('eligibility')}
                className="btn-primary text-lg px-8 py-3.5 shadow-xl shadow-primary-600/30"
              >
                Check Your Eligibility
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link
                to="/guide"
                className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-3.5"
              >
                View Voting Guide
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-20 animate-fade-in">
            <ElectionCountdown />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('stats')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce-slow"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center animate-fade-in-up">
                <div className="text-3xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title">Everything You Need to Vote</h2>
            <p className="section-subtitle mx-auto">
              From checking your eligibility to understanding your ballot, we've got you covered
              with tools and resources for every step of the voting journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="card-hover p-6 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="section-title">Are You Eligible to Vote?</h2>
            <p className="section-subtitle mx-auto">
              Take our quick 4-question check to find out if you meet the basic requirements.
            </p>
          </div>
          <EligibilityQuestionnaire />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-lg text-primary-100 max-w-xl mx-auto mb-8">
            Start with our step-by-step voting guide and learn everything you need to
            cast your ballot with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/guide" className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3.5 shadow-xl">
              Start Voting Guide
            </Link>
            <Link to="/advisor" className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3.5">
              Ask AI Advisor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
