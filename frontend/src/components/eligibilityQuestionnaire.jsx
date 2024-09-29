import React, { useState } from 'react';

const EligibilityQuestionnaire = () => {
  const questions = [
    { question: "Are you a citizen of the country? (yes/no)", key: 'citizenship' },
    { question: "Are you 18 years of age or older? (yes/no)", key: 'age' },
    { question: "Have you ever been convicted of a felony? (yes/no)", key: 'felony' },
    { question: "Are you declared mentally incompetent by a court of law? (yes/no)", key: 'mentalCompetence' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isEligible, setIsEligible] = useState(null);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    const trimmedInput = input.trim().toLowerCase();
    
    // Update the answers
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.key]: trimmedInput,
    }));

    // Check if the current question is the last one, then calculate eligibility
    if (currentQuestionIndex >= questions.length - 1) {
      calculateEligibility({
        ...answers,
        [currentQuestion.key]: trimmedInput,
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setInput(""); // Reset input field
  };

  const calculateEligibility = (answers) => {
    const { citizenship, age, residency, felony, mentalCompetence } = answers;

    // Check conditions for eligibility
    if (citizenship === "yes" && age === "yes" && felony === "no" && mentalCompetence === "no") {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {isEligible === null ? (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            {questions[currentQuestionIndex].question}
          </h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            placeholder="Enter yes or no"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>

          {/* Debug section: Show current answers
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Current Answers:</h4>
            <pre className="bg-gray-200 p-4 rounded-lg">
              {JSON.stringify(answers, null, 2)}
            </pre>
          </div> */}
        </div>
      ) : (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {isEligible ? (
            <>
              <h3 className="text-xl font-semibold text-green-500">
                You are eligible to vote!
              </h3>
              <button
                onClick={() => window.location.href = '/guide'}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg transition duration-300"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-red-500">
                You are not eligible to vote.
              </h3>
              <button
                onClick={() => window.location.href = 'https://www.usa.gov/who-can-vote'}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mt-4 rounded-lg transition duration-300"
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
