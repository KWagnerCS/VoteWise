import { useState, useRef, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const SUGGESTIONS = [
  'How do I register to vote?',
  'What ID do I need to bring to vote?',
  'Can I vote early in my state?',
  'How do mail-in ballots work?',
  'What are my rights as a voter?',
  'How do I find my polling place?',
];

const AIAdvisorPage = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your VoteWise AI Advisor. I'm here to answer your questions about voting, elections, registration, polling places, and more. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: 'Sorry, the AI Advisor requires an OpenAI API key to be configured. Please add your `VITE_OPENAI_API_KEY` to the environment variables.',
      }]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are VoteWise AI, a helpful, nonpartisan voting assistant. Your goal is to help users understand the voting process, registration requirements, polling places, election dates, voter ID laws, mail-in voting, and other voting-related topics. Provide accurate, concise, and easy-to-understand information. Be encouraging and supportive of civic participation. If asked about specific candidates or parties, remain neutral and provide factual information only. If asked about topics unrelated to voting or elections, gently redirect to voting-related topics. Keep responses to 2-4 short paragraphs.',
            },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: trimmed },
          ],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response. Please try again.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error connecting to the AI service. Please check your connection and try again.',
      }]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <MainHeader />
      <main className="flex-grow flex flex-col">
        <div className="container-page py-6 flex-grow flex flex-col">
          <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                AI Voting Advisor
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Ask me anything about voting, elections, and the democratic process.
              </p>
            </div>

            {/* Messages area */}
            <div className="flex-grow card p-4 md:p-6 mb-4 flex flex-col min-h-[400px] max-h-[60vh]">
              <div className="flex-grow overflow-y-auto space-y-4 pr-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-primary-600 text-white rounded-br-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-lg'
                      }`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">VoteWise AI</span>
                        </div>
                      )}
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-lg px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="mb-4 animate-fade-in">
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wider font-medium">
                  Suggested questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 dark:hover:text-primary-400 transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about voting..."
                rows={1}
                className="input resize-none flex-grow"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="btn-primary px-5 flex-shrink-0"
              >
                {loading ? (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
              Powered by AI. Information may not be 100% accurate. Always verify with official sources.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAdvisorPage;
