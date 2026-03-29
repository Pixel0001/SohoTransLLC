'use client';
import { useEffect, useRef, useState } from 'react';

// Returns a float 0→1 with smooth ease-in-out quintic
function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

function useCountUp(target, duration = 2200, delayMs = 0, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const timeout = setTimeout(() => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setValue(easeInOutQuint(progress) * target);
        if (progress < 1) raf = requestAnimationFrame(step);
        else setValue(target);
      };
      raf = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, target, duration, delayMs]);

  return value;
}

const CIRCUMFERENCE = 2 * Math.PI * 42;

function StatCard({ number, suffix, label, delay, started }) {
  const value = useCountUp(number, 2200, delay, started);
  const displayInt = Math.round(value);
  const progress = value / number;

  return (
    <div className="flex flex-col items-center">
      {/* SVG ring */}
      <div className="relative inline-flex items-center justify-center mb-3 sm:mb-5">
        <svg className="w-28 h-28 sm:w-36 sm:h-36 -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="5" />
          {/* Progress — driven purely by CSS transition on strokeDashoffset */}
          <circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="#DC2626"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          />
        </svg>
        {/* Label inside */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl sm:text-3xl font-black text-[#1F2937] tabular-nums leading-none">
            {suffix === '/7'
              ? '24/7'
              : suffix === 'K+'
              ? `${displayInt}K+`
              : `${displayInt}${suffix}`}
          </span>
        </div>
      </div>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-gray-400 text-center">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 98,  suffix: '%',  label: 'On-Time Rate',       delay: 0   },
    { number: 15,  suffix: 'K+', label: 'Annual Deliveries',  delay: 150 },
    { number: 50,  suffix: '',   label: 'States Covered',      delay: 300 },
    { number: 24,  suffix: '/7', label: 'Support Available',   delay: 450 },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 mb-12 sm:mb-24">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} started={started} />
      ))}
    </div>
  );
}
