import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Introduction to Voting',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: `Voting is a fundamental right and an essential part of a democratic society. It is the way in which citizens express their opinions and influence the decision-making process of their government.\n\nUnderstanding the voting process and what is required to participate is crucial for every eligible voter. This guide will walk you through the steps to ensure you are ready to vote, from registering to casting your ballot.\n\nEach step is designed to provide you with the necessary information to make informed choices and engage meaningfully in your community's governance.`,
    videoUrl: 'https://www.youtube.com/embed/LY8L6C7tsx8',
  },
  {
    id: 2,
    title: 'Register to Vote',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    description: `The very first step in the voting process is ensuring that you are registered to vote. This crucial step establishes your eligibility and allows you to participate in elections.\n\nTo register, visit the official election website for your state. On the website, you'll be asked to fill out an application with essential personal information such as your full name, current address, and a valid form of identification like a driver's license or state ID.\n\nOnce you've provided all the required details, submit the registration form online or by mail if necessary. After submission, it's highly recommended that you double-check your registration status online to confirm that your registration has been processed. This small but vital check can prevent any issues on voting day.`,
    videoUrl: 'https://www.youtube.com/embed/IE43JgawCUs',
  },
  {
    id: 3,
    title: 'Learn About Candidates and Issues',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: `Once you are registered, it's time to educate yourself on the candidates and issues that will appear on your ballot. Voting is not just about showing up on election day — it's about making informed decisions that reflect your values.\n\nStart by identifying your specific ballot, which includes candidates running for various offices as well as local or national propositions. Research each candidate thoroughly, paying close attention to their platforms, policies, experience, and endorsements.\n\nYou can often find this information through candidate websites, public debates, and news coverage. Additionally, take time to read the text of any ballot propositions. Be sure to consult nonpartisan sources to get a balanced view of each issue and candidate, allowing you to vote with confidence and knowledge.`,
    videoUrl: null,
  },
  {
    id: 4,
    title: 'Find Your Polling Place or Get a Mail-in Ballot',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: `After thoroughly researching the candidates and issues, the next important step is to decide how you will cast your vote.\n\nIf you plan to vote in person, it's essential to find your designated polling place, which is usually located close to your home. Use an online polling place locator tool provided by your election authority to find this information. Once you know where to vote, make a note of the polling place's hours of operation.\n\nIf you prefer the convenience of voting from home, you can request a mail-in ballot. Be sure to submit your request before the official deadline. Whether you choose to vote in person or by mail, planning ahead will ensure your vote counts.`,
    videoUrl: null,
  },
  {
    id: 5,
    title: 'Prepare for Voting Day',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    description: `With voting day approaching, it's crucial to make sure you're fully prepared.\n\nIf you plan to vote in person, gather the identification documents you'll need to present at the polling station. Different states may have specific requirements, so check what form of ID is accepted to avoid complications.\n\nAs you get ready, review your voting selections beforehand. This allows you to go into the polling booth confidently, knowing the choices you're making. For mail-in voters, carefully follow the instructions provided with your ballot. Fill out the ballot completely and accurately, double-check for errors, and seal it as instructed. Preparing ahead ensures you can vote quickly and accurately.`,
    videoUrl: null,
  },
  {
    id: 6,
    title: 'Cast Your Vote',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    description: `The most critical moment in the voting process is casting your vote.\n\nIf you're voting in person, head to your polling place during the hours it is open, and follow the instructions provided by the election officials. Once inside the polling booth, take your time to carefully mark your choices. There's no need to rush — ensure that your selections are accurate, and once you're satisfied, submit your ballot as directed.\n\nIf you're voting by mail, be equally diligent. Double-check that your ballot is filled out completely and correctly, then seal it in the provided envelope, making sure to sign where required. After mailing it, it's a good idea to check that your ballot arrives on time by tracking it online. Ensuring your vote is cast and counted is a powerful civic responsibility.`,
    videoUrl: null,
  },
  {
    id: 7,
    title: 'Confirm Your Vote Was Counted',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: `After casting your vote, the final step is to confirm that your vote has been counted.\n\nIf you voted by mail, many election authorities provide online ballot tracking services where you can verify the status of your ballot and see if it was received and counted. This provides peace of mind, knowing that your participation in the election was successful.\n\nIf you voted in person, you can check online through your state's election website to confirm that your vote was processed. It's important to follow through and ensure that your vote is part of the final tally, as every vote contributes to shaping the future of your community.`,
    videoUrl: null,
  },
];

const VotingFlowChart = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goTo = (idx) => {
    setCurrentStep(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) goTo(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) goTo(currentStep - 1);
  };

  const progress = ((currentStep) / (steps.length - 1)) * 100;
  const step = steps[currentStep];

  return (
    <div className="container-page py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="section-title">Your Voting Journey</h1>
          <p className="section-subtitle mx-auto">
            Follow these 7 steps to go from registration to a counted vote.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar step list */}
          <aside className="hidden md:block">
            <nav className="sticky top-24 space-y-1">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200 text-sm ${
                    idx === currentStep
                      ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 font-semibold shadow-sm'
                      : idx < currentStep
                      ? 'text-green-600 dark:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      : 'text-gray-500 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    idx === currentStep
                      ? 'bg-primary-600 text-white'
                      : idx < currentStep
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  }`}>
                    {idx < currentStep ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.id
                    )}
                  </span>
                  <span className="leading-tight">{s.title.replace(/^Step \d+: /, '')}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main>
            {/* Mobile step indicator */}
            <div className="flex md:hidden gap-2 mb-6 overflow-x-auto pb-2">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                    idx === currentStep
                      ? 'bg-primary-600 text-white shadow-md'
                      : idx < currentStep
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  }`}
                >
                  {idx < currentStep ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.id
                  )}
                </button>
              ))}
            </div>

            {/* Step card */}
            <div className="card p-6 md:p-8 animate-fade-in-up" key={currentStep}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h2>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                {step.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Video */}
              {step.videoUrl && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Watch: {step.title}
                  </h3>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900">
                    <iframe
                      src={step.videoUrl}
                      title={step.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="btn-secondary"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <span className="flex items-center text-sm text-gray-400 dark:text-gray-500">
                {currentStep + 1} / {steps.length}
              </span>

              <button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="btn-primary"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Completion message on last step */}
            {currentStep === steps.length - 1 && (
              <div className="mt-8 card p-6 border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 text-center animate-fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  You're ready to vote!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You've completed all 7 steps. You now have the knowledge to participate in
                  elections with confidence. Remember: every vote matters.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default VotingFlowChart;
