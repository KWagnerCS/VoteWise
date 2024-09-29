import React, { useState } from 'react';

const EligibilityQuestionnaire = () => {
  const questions = [
    { question: "Are you a U.S. citizen?", key: 'citizenship' },
    { question: "Are you 18 years of age or older?", key: 'age' },
    { question: "Have you ever been convicted of a felony?", key: 'felony' },
    { question: "Are you declared mentally incompetent by a court of law?", key: 'mentalCompetence' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isEligible, setIsEligible] = useState(null);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.key]: answer,
    }));

    if (currentQuestionIndex >= questions.length - 1) {
      calculateEligibility({
        ...answers,
        [currentQuestion.key]: answer,
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateEligibility = (answers) => {
    const { citizenship, age, felony, mentalCompetence } = answers;

    if (citizenship === "yes" && age === "yes" && felony === "no" && mentalCompetence === "no") {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {isEligible === null ? (
        <>
          <h3 className="text-4xl font-bold text-center mb-8">
            {questions[currentQuestionIndex].question}
          </h3>
          <div className="flex space-x-10">
            <button
              onClick={() => handleAnswer("yes")}
              className="bg-blue-800 hover:bg-blue-900 text-white text-3xl py-4 px-8 rounded-lg transition duration-300"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="bg-blue-800 hover:bg-blue-900 text-white text-3xl py-4 px-8 rounded-lg transition duration-300"
            >
              No
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          {isEligible ? (
            <>
              <h3 className="text-4xl font-bold text-green-500 mb-4">
                You are eligible to vote!
              </h3>
              <button
                onClick={() => window.location.href = '/guide'}
                className="bg-blue-500 hover:bg-blue-600 text-white text-2xl py-4 px-8 rounded-lg transition duration-300"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-bold text-red-500 mb-4">
                You are not eligible to vote.
              </h3>
              <button
                onClick={() => window.open('https://www.usa.gov/who-can-vote', '_blank')}
                className="bg-red-500 hover:bg-red-600 text-white text-2xl py-4 px-8 rounded-lg transition duration-300"
              >
                Learn More About Voting
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EligibilityQuestionnaire;
