import React from 'react';

interface TopNavProps {
  onClose: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ onClose }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClose}
        className="text-amber-400 hover:text-amber-500 transition-colors"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default TopNav;
