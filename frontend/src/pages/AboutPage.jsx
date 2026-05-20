import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Kevin Wagner',
    role: 'Co-Creator & Developer',
    linkedin: 'https://www.linkedin.com/in/kwagnercs',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Alexander Aziz',
    role: 'Co-Creator & Developer',
    linkedin: 'https://www.linkedin.com/in/alexanderaziz',
    gradient: 'from-purple-500 to-pink-600',
  },
];

const values = [
  {
    title: 'Nonpartisan',
    desc: 'We do not endorse candidates or parties. Our mission is to provide factual, unbiased information to all voters.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Accessible',
    desc: 'We believe voting information should be easy to find, easy to understand, and available to everyone.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Accurate',
    desc: 'We strive to provide the most up-to-date and correct information by sourcing from official government and nonpartisan organizations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Empowering',
    desc: 'Our goal is to make every eligible voter feel confident and prepared to participate in the democratic process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 text-white">
          <div className="container-page text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About VoteWise</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Empowering voters with the information they need to make informed decisions
              and participate confidently in our democracy.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-page max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Mission</h2>
            </div>
            <div className="card p-8 md:p-10 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                VoteWise was created to simplify access to vital voting information. In a world
                where the voting process can often seem overwhelming, our goal is to help every
                eligible voter navigate the landscape with ease and confidence.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We believe that an informed electorate is the foundation of a functioning democracy.
                Whether you're a first-time voter or a seasoned participant, our platform provides
                the tools and resources you need — from checking eligibility and registering to vote,
                to researching candidates and understanding your ballot.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Built during Shellhacks 2024 and continuously improved, VoteWise is committed to
                being your trusted, nonpartisan voting companion. Together, let's make every voice heard.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle mx-auto">
                The principles that guide everything we build.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((val) => (
                <div key={val.title} className="card-hover p-6 text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="section-title">Meet the Team</h2>
              <p className="section-subtitle mx-auto">
                VoteWise was created by two developers passionate about democracy and technology.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="card-hover p-8 text-center w-64 group">
                  <div className={`w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 text-white text-center">
          <div className="container-page">
            <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
            <p className="text-primary-100 mb-6 max-w-md mx-auto">
              Check your eligibility and begin your voting journey with VoteWise.
            </p>
            <a href="/" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-xl">
              Go to Home
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
