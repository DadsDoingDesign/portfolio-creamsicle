interface NavigationProps {
  className?: string;
  isViewingCaseStudy: boolean;
  onBack: () => void;
}

export default function Navigation({ className = '', isViewingCaseStudy, onBack }: NavigationProps) {
  return (
    <nav className={`flex items-center justify-between p-8 ${className}`}>
      <button
        onClick={onBack}
        className="text-2xl font-bold hover:text-amber-400 transition-colors"
      >
        DD
      </button>
    </nav>
  );
}
