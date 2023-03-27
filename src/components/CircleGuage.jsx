import React from 'react';

const CircleGuage = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  let color = '';
  if (value >= 7) {
    color = 'text-green';
  } else if (value >= 4) {
    color = 'text-yellow';
  } else {
    color = 'text-red';
  }

 
  return (
    <div className="relative w-14 h-14">
      <svg viewBox="0 0 36 36" className="absolute">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#ccc"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${percentage}, 100`}
          transform="rotate(-90, 18, 18)"
          className={`${color} stroke-current`}
        />
      </svg>
      <div className={`absolute w-full h-full flex items-center justify-center text-xl font-bold ${color}`}>
        {value}
      </div>
    </div>
  );
};

export default CircleGuage;
