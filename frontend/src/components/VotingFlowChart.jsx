import React, { useState } from 'react';

const votingFlowChart = () => {
  const steps = [
    { 
      id: 1, 
      title: "Step 1: Register to Vote", 
      description: "Visit the election website, register, and check your status.",
      details: [
        "1.1: Visit the official election website.",
        "1.2: Provide your personal information (name, address, ID).",
        "1.3: Complete your registration by submitting the form.",
        "1.4: Check your registration status online."
      ]
    },
    { 
      id: 2, 
      title: "Step 2: Learn About Candidates and Issues", 
      description: "Research candidates and review the ballot propositions.",
      details: [
        "2.1: Identify your ballot and the candidates/issues.",
        "2.2: Research candidates’ platforms and qualifications.",
        "2.3: Review the text of ballot propositions.",
        "2.4: Consult trusted sources for nonpartisan information."
      ]
    },
    { 
      id: 3, 
      title: "Step 3: Find Your Polling Place or Get a Mail-in Ballot", 
      description: "Locate your polling place or request a mail-in ballot.",
      details: [
        "3.1: Locate your polling place using an online tool.",
        "3.2: Check polling hours for in-person voting.",
        "3.3: Request a mail-in ballot by the deadline.",
        "3.4: Ensure you receive your mail-in ballot on time."
      ]
    },
    { 
      id: 4, 
      title: "Step 4: Prepare for Voting Day", 
      description: "Bring your ID or mail in your ballot on time.",
      details: [
        "4.1: Gather your identification required to vote.",
        "4.2: Review your voting choices before heading to the polls.",
        "4.3: Prepare your mail-in ballot following instructions."
      ]
    },
    { 
      id: 5, 
      title: "Step 5: Cast Your Vote", 
      description: "Vote in person or mail your completed ballot.",
      details: [
        "5.1: Vote at your polling place and submit your ballot.",
        "5.2: If voting by mail, ensure your ballot is sealed and signed.",
        "5.3: Double-check your vote for accuracy before submitting."
      ]
    },
    { 
      id: 6, 
      title: "Step 6: Confirm Your Vote Was Counted", 
      description: "Track your vote or confirm at the polling station.",
      details: [
        "6.1: Track your mail-in ballot status online.",
        "6.2: Confirm at the polling station that your vote was counted."
      ]
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Calculate progress value between 0 and 100
  const progressValue = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      {/* Progress bar with numeric value */}
      <div className="flex items-center mb-4">
        <div className="w-full bg-gray-300 h-2 rounded">
          <div className="bg-blue-500 h-2 rounded" style={{ width: `${progressValue}%` }}></div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="font-bold text-xl mb-4">{steps[currentStep].title}</h2>
        <p className="text-gray-700">{steps[currentStep].description}</p>
        <ol className="mt-4 text-gray-600 list-none">
          {steps[currentStep].details.map((detail, index) => (
            <li key={index} className="ml-4 list-disc list-none">{detail}</li>
          ))}
        </ol>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          className={`px-4 py-2 rounded ${currentStep === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>

        <button
          className={`px-4 py-2 rounded ${currentStep === steps.length - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VotingFlowChart;