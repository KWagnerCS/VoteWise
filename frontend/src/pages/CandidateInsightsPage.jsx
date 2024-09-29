import { useState } from 'react';
import '../index.css';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

// Component to display individual representative information
const RepresentativeCard = ({ name, role, isSelected, onClick }) => (
    <div
      onClick={onClick}
      className={`border w-full rounded-lg p-4 mb-2 bg-white shadow-md cursor-pointer transition-colors duration-200 ${isSelected ? "bg-gray-200" : "hover:bg-gray-200"}`}
    >
      <h2 className="font-semibold text-lg">{name}</h2>
      <p>{role}</p>
    </div>
);

const CandidateInsightsPage = () => {
  const [representatives, setRepresentatives] = useState({});
  const [address, setAddress] = useState("");
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedRepIndex, setExpandedRepIndex] = useState(null); // Track which representative is expanded
  const [additionalInfo, setAdditionalInfo] = useState(""); // New state for additional info

  // Reduced levels to only Local, State, and Country
  const levels = [
    { label: "Local", value: "locality" },
    { label: "State", value: "administrativeArea1" },
    { label: "Country", value: "country" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Replace with your actual API key
    const apiKey = import.meta.env.VITE_GOOGLE_CIVIC_API_KEY;

    const endpoint = `https://www.googleapis.com/civicinfo/v2/representatives?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data && data.officials) {
        // Filter representatives and group by local, state, and country
        const groupedReps = {
          Local: [],
          State: [],
          Country: []
        };

        data.officials.forEach((official, idx) => {
          const offices = data.offices.filter((office) =>
            office.officialIndices.includes(idx)
          );

          offices.forEach((office) => {
            const level = office.levels?.[0] || "";

            // Combine similar levels and only add if level is selected
            let category;
            if (level.includes("local")) {
              category = "Local";
            } else if (level.includes("administrativeArea")) {
              category = "State";
            } else if (level.includes("country")) {
              category = "Country";
            }

            // Add representative only if category matches a selected level
            if (category && selectedLevels.includes(category)) {
              groupedReps[category].push({ name: official.name, role: office.name });
            }
          });
        });

        setRepresentatives(groupedReps);
      } else {
        setError("No representatives found for this location.");
        setRepresentatives({ Local: [], State: [], Country: [] }); // Reset to empty arrays
      }
    } catch (err) {
      setError("Failed to fetch representative data. Please try again.");
      setRepresentatives({ Local: [], State: [], Country: [] }); // Reset to empty arrays
    }

    setLoading(false);
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLevels((prev) =>
      checked ? [...prev, value] : prev.filter((level) => level !== value)
    );
  };


  const handleCardClick = async (rep, idx) => {
    setAdditionalInfo("Thinking...");
    if (expandedRepIndex === idx) {
      setExpandedRepIndex(null);
      //setAdditionalInfo(""); // Clear the additional info when collapsing
    } else {
      setExpandedRepIndex(idx);
      // Fetch additional information about the representative
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "gpt-4o-mini", // Adjust model to GPT-4 when available
            messages: [
              {
                role: "user",
                content: `Write unbiased and factual, concise information about ${rep.name}, who is ${rep.role}. Write a brief summary of their lives and background. Quickly go over their policies and motivations. It should be a concise, short paragrah. Write clearly and easy to understand. If there is not much information on the person, simply write what is known.`
              }
            ]
          })
        });

        const result = await response.json();
        const policyInfo = result.choices[0]?.message?.content || "No additional information available.";
        setAdditionalInfo(policyInfo);
      } catch (error) {
        console.error("Error fetching additional information:", error);
        setAdditionalInfo("Failed to fetch additional information. Please try again.");
      }
    }
  };



  return (
    <div className="flex flex-col min-h-screen">
                <MainHeader />
    <div className="min-h-screen flex flex-col items-center pt-12 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search Representatives by Location</h1>

      {/* Form to search for representatives */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col items-center justify-center mb-8">
        {/* Address Input */}
        <input
          type="text"
          placeholder="Enter State, City, or Zipcode"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-sm mb-4"
        />

        {/* Multi-Select for Levels */}
        <div className="flex flex-wrap justify-center mb-4">
          {levels.map((level) => (
            <label key={level.value} className="flex items-center mr-4">
              <input
                type="checkbox"
                value={level.label}
                onChange={handleLevelChange}
                className="mr-2"
              />
              {level.label}
            </label>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Representative Results */}
      <div className="flex flex-col items-center w-1/2 max-w-full">
        {Object.entries(representatives).map(([category, reps]) => (
          reps.length > 0 && selectedLevels.includes(category) && (
            <div key={category} className="mb-8">
              <h3 className="text-xl max-w-full font-bold mt-4">{category} Representatives</h3>
              {reps.map((rep, idx) => (
                <div key={idx}>
                  <RepresentativeCard
                    name={rep.name}
                    role={rep.role}
                    isSelected={expandedRepIndex === idx}
                    onClick={() => handleCardClick(rep, idx)}  
                  />
                  {expandedRepIndex === idx && (
                    <div className={`mt-4 mb-4 p-6 bg-gray-200 rounded-lg transition-all duration-300 ease-in-out ${expandedRepIndex === idx ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                      <p>{additionalInfo}</p>
                  </div>
                  )}
                </div>
              ))}
            </div>
          )
        ))}
      </div>
    </div>

    <Footer />
    </div>
  );
};


export default CandidateInsightsPage;
