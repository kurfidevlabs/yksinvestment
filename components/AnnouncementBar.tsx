
import React, { useState } from 'react';
import { CloseIcon } from './icons';

const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-[#FFB703] h-[40px] px-4 flex items-center justify-between text-[#0D1B2A] relative">
      <div className="flex-grow text-center">
        <span className="text-sm font-medium">
          🔥 Hot Deal: Get 10% Off All Solar Kits This Month!
        </span>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-4 p-1 rounded-full text-[#333333] hover:text-[#0D1B2A] hover:bg-black/10 transition-colors"
        aria-label="Close announcement bar"
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
