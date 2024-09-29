import React, { useState } from 'react';

const VotingFlowChart = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Introduction to Voting",
      description: `Voting is a fundamental right and an essential part of a democratic society. It is the way in which citizens express their opinions and influence the decision-making process of their government. Understanding the voting process and what is required to participate is crucial for every eligible voter. This guide will walk you through the steps to ensure you are ready to vote, from registering to casting your ballot. Each step is designed to provide you with the necessary information to make informed choices and engage meaningfully in your community's governance.`,
      videoUrl: "https://www.youtube.com/embed/LY8L6C7tsx8" // Replace with actual YouTube link
    },
    {
      id: 2,
      title: "Step 2: Register to Vote",
      description: `The very first step in the voting process is ensuring that you are registered to vote. This crucial step establishes your eligibility and allows you to participate in elections. To register, visit the official election website for your state or country. On the website, you'll be asked to fill out an application with essential personal information such as your full name, current address, and a valid form of identification like a driver’s license or national ID. Once you've provided all the required details, submit the registration form online or by mail if necessary. After submission, it's highly recommended that you double-check your registration status online to confirm that your registration has been processed and you are officially on the voter roll. This small but vital check can prevent any issues on voting day.`,
      videoUrl: "https://www.youtube.com/embed/IE43JgawCUs" // Replace with actual YouTube link
    },
    {
      id: 3,
      title: "Step 3: Learn About Candidates and Issues",
      description: `Once you are registered, it's time to educate yourself on the candidates and issues that will appear on your ballot. Voting is not just about showing up on election day—it’s about making informed decisions that reflect your values and the direction you want your community, state, or country to take. Start by identifying your specific ballot, which includes candidates running for various offices as well as local or national propositions. Research each candidate thoroughly, paying close attention to their platforms, policies, experience, and endorsements. You can often find this information through candidate websites, public debates, and news coverage. Additionally, take time to read the text of any ballot propositions, which often cover important issues such as public funding, legal reforms, or social policies. Be sure to consult nonpartisan sources to get a balanced view of each issue and candidate, allowing you to vote with confidence and knowledge.`,
      videoUrl: "null" // Replace with actual YouTube link
    },
    {
      id: 4,
      title: "Step 4: Find Your Polling Place or Get a Mail-in Ballot",
      description: `After thoroughly researching the candidates and issues, the next important step is to decide how you will cast your vote. If you plan to vote in person, it's essential to find your designated polling place, which is usually located close to your home. Use an online polling place locator tool provided by your election authority to easily find this information. Once you know where to vote, make a note of the polling place’s hours of operation, as they may vary. Voting in person is a great way to engage directly with the election process. However, if you prefer the convenience of voting from home, you can request a mail-in ballot. Be sure to submit your request before the official deadline, as this ensures you receive your ballot in time. Whether you choose to vote in person or by mail, planning ahead will ensure your vote counts.`,
      videoUrl: "https://www.youtube.com/embed/example3" // Replace with actual YouTube link
    },
    {
      id: 5,
      title: "Step 5: Prepare for Voting Day",
      description: `With voting day approaching, it’s crucial to make sure you’re fully prepared. If you plan to vote in person, gather the identification documents you’ll need to present at the polling station. Different states or countries may have specific requirements, so check what form of ID is accepted to avoid complications. As you get ready, review your voting selections beforehand. This allows you to go into the polling booth confidently, knowing the choices you’re making. For mail-in voters, the preparation involves carefully following the instructions provided with your ballot. Be sure to fill out the ballot completely and accurately, using only the specified type of pen or pencil if mentioned. Double-check your completed ballot for any errors, and seal it as instructed, often with a signature on the envelope. Preparing ahead ensures you can vote quickly and accurately, preventing any last-minute stress on voting day.`,
      videoUrl: "null" // Replace with actual YouTube link
    },
    {
      id: 6,
      title: "Step 6: Cast Your Vote",
      description: `The most critical moment in the voting process is, of course, casting your vote. If you're voting in person, head to your polling place during the hours it is open, and follow the instructions provided by the election officials. Once inside the polling booth, take your time to carefully mark your choices. There’s no need to rush—ensure that your selections are accurate, and once you’re satisfied, submit your ballot as directed by the officials, either through a voting machine or by placing it in a secure ballot box. If you’re voting by mail, be equally diligent. Double-check that your ballot is filled out completely and correctly, then seal it in the provided envelope, making sure to sign where required. After mailing it, it’s a good idea to check that your ballot arrives on time by tracking it online if your local election system provides this feature. Ensuring your vote is cast and counted is a powerful civic responsibility.`,
      videoUrl: "null" // Replace with actual YouTube link
    },
    {
      id: 7,
      title: "Step 7: Confirm Your Vote Was Counted",
      description: `After casting your vote, the final step is to confirm that your vote has been counted. If you voted by mail, many election authorities provide online ballot tracking services where you can verify the status of your ballot and see if it was received and counted. This provides peace of mind, knowing that your participation in the election was successful. If you voted in person, you can ask at the polling station or check online to confirm that your vote was processed. It's important to follow through and ensure that your vote is part of the final tally, as every vote contributes to shaping the future of your community.`,
      videoUrl: "null" // Replace with actual YouTube link
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
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

        {/* Video Embed */}
        {steps[currentStep].videoUrl !== 'null' && (
          <div className="mt-6 flex justify-center">
          {/* <h3 className="font-semibold m-2">Watch the Video:</h3> */}
          <iframe
            width="720"
            height="410"
            src={steps[currentStep].videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        )}
        
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
