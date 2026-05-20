import { useState } from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const LEVELS = [
  { label: 'Local', value: 'Local' },
  { label: 'State', value: 'State' },
  { label: 'National', value: 'Country' },
];

const SkeletonCard = () => (
  <div className="card p-5 mb-3 animate-pulse">
    <div className="skeleton h-5 w-48 mb-2" />
    <div className="skeleton h-4 w-32" />
  </div>
);

const RepresentativeCard = ({ name, role, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`card p-5 mb-3 cursor-pointer transition-all duration-200 ${
      isSelected
        ? 'ring-2 ring-primary-500 bg-primary-50/50 dark:bg-primary-950/20 shadow-md'
        : 'hover:shadow-lg hover:-translate-y-0.5'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
        {name.charAt(0)}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
      <svg className={`w-5 h-5 ml-auto text-gray-400 transition-transform ${isSelected ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const CandidateInsightsPage = () => {
  const [representatives, setRepresentatives] = useState({});
  const [address, setAddress] = useState('');
  const [selectedLevels, setSelectedLevels] = useState(['Local', 'State', 'Country']);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [aiInfo, setAiInfo] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address.trim()) return;

    setLoading(true);
    setError(null);
    setRepresentatives({});
    setExpandedIdx(null);

    const apiKey = import.meta.env.VITE_GOOGLE_CIVIC_API_KEY;
    const endpoint = `https://www.googleapis.com/civicinfo/v2/representatives?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data && data.officials) {
        const grouped = { Local: [], State: [], Country: [] };

        data.officials.forEach((official, idx) => {
          const offices = data.offices.filter((office) =>
            office.officialIndices.includes(idx)
          );

          offices.forEach((office) => {
            const level = office.levels?.[0] || '';
            let category;
            if (level.includes('locality') || level.includes('local')) {
              category = 'Local';
            } else if (level.includes('administrativeArea')) {
              category = 'State';
            } else if (level.includes('country')) {
              category = 'Country';
            }

            if (category) {
              const exists = grouped[category].some(
                (r) => r.name === official.name && r.role === office.name
              );
              if (!exists) {
                grouped[category].push({ name: official.name, role: office.name });
              }
            }
          });
        });

        setRepresentatives(grouped);
        if (!Object.values(grouped).some((arr) => arr.length > 0)) {
          setError('No representatives found for this location. Try adjusting your filters.');
        }
      } else {
        setError('No representatives found for this location.');
      }
    } catch {
      setError('Failed to fetch representative data. Please check your connection and try again.');
    }

    setLoading(false);
  };

  const handleCardClick = async (repList, flatIndex) => {
    if (expandedIdx === flatIndex) {
      setExpandedIdx(null);
      return;
    }

    setExpandedIdx(flatIndex);
    setAiLoading(true);
    setAiInfo('');

    const rep = repList[flatIndex];

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'user',
              content: `Write a concise, factual, and unbiased summary about ${rep.name}, who serves as ${rep.role}. Cover their background, key policy positions, and notable achievements. Keep it to 2-3 short paragraphs. Write clearly and be objective. If there is limited information, state what is known honestly.`,
            },
          ],
        }),
      });

      const result = await response.json();
      setAiInfo(result.choices[0]?.message?.content || 'No additional information available.');
    } catch {
      setAiInfo('Failed to load additional information. Please try again.');
    }

    setAiLoading(false);
  };

  const toggleLevel = (value) => {
    setSelectedLevels((prev) =>
      prev.includes(value) ? prev.filter((l) => l !== value) : [...prev, value]
    );
  };

  const flatReps = [];
  ['Local', 'State', 'Country'].forEach((cat) => {
    if (selectedLevels.includes(cat) && representatives[cat]) {
      representatives[cat].forEach((rep) => flatReps.push({ ...rep, category: cat }));
    }
  });

  const hasResults = flatReps.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <div className="container-page py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="section-title">Candidate Insights</h1>
              <p className="section-subtitle mx-auto">
                Search for your elected representatives by address and get AI-powered
                summaries of their backgrounds and policy positions.
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="card p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-grow relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter your address, city, state, or zip code..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input pl-11"
                  />
                </div>
                <button type="submit" className="btn-primary whitespace-nowrap" disabled={loading}>
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Searching...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </>
                  )}
                </button>
              </div>

              {/* Level filters */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">Show:</span>
                {LEVELS.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => toggleLevel(level.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedLevels.includes(level.value)
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </form>

            {/* Error */}
            {error && (
              <div className="card p-4 mb-6 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Loading skeletons */}
            {loading && (
              <div>
                {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
              </div>
            )}

            {/* Results */}
            {hasResults && !loading && (
              <div>
                {['Local', 'State', 'Country'].map((cat) => {
                  const reps = representatives[cat];
                  if (!reps || reps.length === 0 || !selectedLevels.includes(cat)) return null;

                  return (
                    <div key={cat} className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${
                          cat === 'Local' ? 'bg-green-500' : cat === 'State' ? 'bg-blue-500' : 'bg-purple-500'
                        }`} />
                        {cat === 'Country' ? 'National' : cat} Representatives
                        <span className="text-sm font-normal text-gray-400">({reps.length})</span>
                      </h3>

                      {reps.map((rep, idx) => {
                        const flatIdx = flatReps.indexOf(rep);
                        return (
                          <div key={`${rep.name}-${idx}`}>
                            <RepresentativeCard
                              name={rep.name}
                              role={rep.role}
                              isSelected={expandedIdx === flatIdx}
                              onClick={() => handleCardClick(flatReps, flatIdx)}
                            />

                            {expandedIdx === flatIdx && (
                              <div className="ml-4 mb-4 pl-6 border-l-2 border-primary-200 dark:border-primary-800 animate-fade-in">
                                {aiLoading ? (
                                  <div className="card p-5">
                                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                      </svg>
                                      Generating AI summary...
                                    </div>
                                  </div>
                                ) : (
                                  <div className="card p-5 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {aiInfo}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Empty state */}
            {!loading && !error && !hasResults && (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Search for Your Representatives
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Enter your address above to find your elected officials at the local,
                  state, and national levels. Click on any result to get an AI-powered summary.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CandidateInsightsPage;
