import React from 'react';

interface BottomNavProps {
  currentFrame: number;
  totalFrames: number;
  onNext: () => void;
  onPrev: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  currentFrame,
  totalFrames,
  onNext,
  onPrev,
}) => {
  const isFirstFrame = currentFrame === 0;
  const isLastFrame = currentFrame === totalFrames - 1;

  return (
    <div className="flex items-center justify-between">
      {!isFirstFrame && (
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
      )}
      <div className="flex-1 mx-8">
        <div className="h-px bg-amber-400" />
      </div>
      {!isLastFrame && (
        <button
          onClick={onNext}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors"
        >
          Next
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BottomNav;
