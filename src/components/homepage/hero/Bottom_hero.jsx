import React from "react";
import { SiSpotify, SiSlack, SiAdobe, SiAsana, SiLinear } from "react-icons/si";

export default function Bottom_hero() {
  return (
    <div className="w-full bg-gray-900 border-t border-gray-800 py-2 sm:py-3 absolute bottom-0 left-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-around gap-2 sm:gap-4 md:gap-8 overflow-x-auto">
          <span className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <SiSpotify className="text-white text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition" />
            <span className="text-white text-xs sm:text-sm md:text-base">Spotify</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <SiSlack className="text-white text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition" />
            <span className="text-white text-xs sm:text-sm md:text-base">Slack</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <SiAdobe className="text-white text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition" />
            <span className="text-white text-xs sm:text-sm md:text-base">Adobe</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <SiAsana className="text-white text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition" />
            <span className="text-white text-xs sm:text-sm md:text-base">Asana</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <SiLinear className="text-white text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition" />
            <span className="text-white text-xs sm:text-sm md:text-base">Linear</span>
          </span>
        </div>
      </div>
    </div>
  );
}
