import { useState, useEffect } from 'react';

const elections = [
  { name: '2026 Midterm Elections', date: '2026-11-03', type: 'Federal' },
  { name: 'Next Presidential Election', date: '2028-11-07', type: 'Federal' },
];

const ElectionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [selectedElection, setSelectedElection] = useState(0);

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const target = new Date(elections[selectedElection].date).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [selectedElection]);

  if (!timeLeft) return null;

  const pads = (n) => String(n).padStart(2, '0');

  return (
    <div className="text-center animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-6">
        {elections.map((e, i) => (
          <button
            key={e.date}
            onClick={() => setSelectedElection(i)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedElection === i
                ? 'bg-white text-primary-700 shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {e.type}
          </button>
        ))}
      </div>

      <h3 className="text-white/80 text-lg mb-4">{elections[selectedElection].name}</h3>

      <div className="flex items-center justify-center gap-3 md:gap-5">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-white/15 backdrop-blur rounded-xl px-3 md:px-5 py-3 md:py-4 min-w-[70px] md:min-w-[90px]">
              <span className="text-3xl md:text-5xl font-extrabold text-white tabular-nums">
                {pads(unit.value)}
              </span>
            </div>
            <span className="text-xs md:text-sm text-white/60 mt-2 block uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionCountdown;
