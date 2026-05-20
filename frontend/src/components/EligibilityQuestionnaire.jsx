import { useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  { question: 'Are you a U.S. citizen?', key: 'citizenship' },
  { question: 'Are you 18 years of age or older on or before election day?', key: 'age' },
  { question: 'Are you currently serving a felony sentence?', key: 'felony' },
  { question: 'Have you been declared mentally incompetent by a court of law?', key: 'mentalCompetence' },
];

const EligibilityQuestionnaire = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const key = questions[index].key;
    const newAnswers = { ...answers, [key]: answer };

    if (index >= questions.length - 1) {
      const { citizenship, age, felony, mentalCompetence } = newAnswers;
      const eligible = citizenship === 'yes' && age === 'yes' && felony === 'no' && mentalCompetence === 'no';
      setResult(eligible);
      setAnswers(newAnswers);
    } else {
      setAnswers(newAnswers);
      setIndex(index + 1);
    }
  };

  const reset = () => {
    setIndex(0);
    setAnswers({});
    setResult(null);
  };

  if (result !== null) {
    return (
      <div className="max-w-lg mx-auto text-center animate-scale-in">
        {result ? (
          <div className="card p-8 md:p-10 border-green-200 dark:border-green-900/50">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-green-600 dark:text-green-400 mb-3">
              You are eligible to vote!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Great news! Based on your answers, you meet the basic requirements to vote.
              Let's get you ready for election day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/guide" className="btn-primary">
                Go to Voting Guide
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button onClick={reset} className="btn-secondary">
                Retake Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-8 md:p-10 border-red-200 dark:border-red-900/50">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-red-600 dark:text-red-400 mb-3">
              You may not be eligible yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Based on your answers, you may not meet all the requirements. But don't worry —
              rules vary by state and your situation may change.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.usa.gov/who-can-vote"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Learn More on USA.gov
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button onClick={reset} className="btn-secondary">
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Question {index + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {Math.round(((index) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 dark:bg-primary-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((index) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card p-8 md:p-10 text-center animate-fade-in-up" key={index}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {questions[index].question}
        </h3>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleAnswer('yes')}
            className="btn-primary text-xl px-10 py-4 min-w-[120px]"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer('no')}
            className="btn-secondary text-xl px-10 py-4 min-w-[120px]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityQuestionnaire;
