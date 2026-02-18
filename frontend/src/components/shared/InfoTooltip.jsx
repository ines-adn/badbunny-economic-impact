import { useState } from 'react';

/**
 * InfoTooltip Component
 * Displays an info icon (ⓘ) with a styled tooltip on hover
 * Optionally links to a source URL
 */
export function InfoTooltip({ text, link }) {
  const [isVisible, setIsVisible] = useState(false);

  const content = (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="text-[#004E89] hover:text-[#FF6B35] cursor-help text-sm">
        ⓘ
      </span>

      {isVisible && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 px-3 py-2 text-xs text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none">
          <div className="relative">
            {text}
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </span>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {content}
      </a>
    );
  }

  return content;
}
