import React from "react";

const CodeIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#23272F" />
    <path
      d="M12 20L8 16L12 12M20 12L24 16L20 20"
      stroke="#7DD3FC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReactIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="10" fill="#E0F2FE" />
    <g>
      <ellipse cx="20" cy="20" rx="10" ry="4" stroke="#38BDF8" strokeWidth="2" />
      <ellipse
        cx="20"
        cy="20"
        rx="10"
        ry="4"
        transform="rotate(60 20 20)"
        stroke="#38BDF8"
        strokeWidth="2"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="10"
        ry="4"
        transform="rotate(120 20 20)"
        stroke="#38BDF8"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="2.5" fill="#38BDF8" />
    </g>
  </svg>
);

const SQLIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="32" rx="8" fill="#C7D2FE" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#6366F1"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Mona Sans, sans-serif"
      dy=".3em"
    >
      SQL
    </text>
  </svg>
);

const codeLines = [
  { color: "bg-pink-400", width: "w-16" },
  { color: "bg-green-400", width: "w-12" },
  { color: "bg-blue-400", width: "w-20" },
  { color: "bg-yellow-400", width: "w-14" },
  { color: "bg-green-400", width: "w-10" },
  { color: "bg-pink-400", width: "w-20" },
  { color: "bg-blue-400", width: "w-16" },
  { color: "bg-yellow-400", width: "w-12" },
];

const ThreeDShowcase = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-white py-10">
      {/* Floating React Icon */}
      <div className="absolute left-10 top-10 animate-float-slow z-10">
        <ReactIcon className="w-16 h-16 drop-shadow-lg" />
      </div>
      {/* Floating SQL Icon */}
      <div className="absolute right-16 top-8 animate-float-fast z-10">
        <SQLIcon className="w-20 h-16 drop-shadow-lg" />
      </div>
      {/* Floating React Icon (bottom right) */}
      <div className="absolute right-10 bottom-10 animate-float-slow z-10">
        <ReactIcon className="w-16 h-16 drop-shadow-lg" />
      </div>
      {/* Floating Code Icon (bottom left) */}
      <div className="absolute left-16 bottom-16 animate-float-fast z-10">
        <CodeIcon className="w-14 h-14 drop-shadow-lg" />
      </div>
      {/* Laptop */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Laptop body */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-4 pb-8 relative" style={{ width: 340, height: 220 }}>
          {/* Screen */}
          <div className="bg-gray-900 rounded-xl shadow-inner p-4 flex flex-col gap-2" style={{ width: 300, height: 120, margin: "0 auto" }}>
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={`h-3 rounded-full ${line.color} ${line.width} mb-1`}
                style={{ opacity: 0.9, marginLeft: i % 2 === 0 ? 0 : 24 }}
              />
            ))}
          </div>
          {/* Keyboard */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex flex-wrap gap-1 w-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-700 rounded-sm w-5 h-2.5"
                style={{ opacity: 0.7 + 0.3 * ((i % 4) / 4) }}
              />
            ))}
          </div>
        </div>
        {/* Floating code tag card */}
        <div className="absolute left-[70%] top-[30%] animate-float z-30">
          <CodeIcon className="w-20 h-20" />
        </div>
        {/* Floating code tag card (bottom) */}
        <div className="absolute left-[40%] bottom-[-60px] animate-float z-30">
          <CodeIcon className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
};

export default ThreeDShowcase;

