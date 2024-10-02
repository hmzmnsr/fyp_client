import { React, useState, useEffect } from "react";
import programsbanner from "../../assets/programs/banner.webp";

const ProgramsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className={`relative transform transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full opacity-0"
        }`}
      >
        {/* Image with fade effect and overlay */}
        <div className="relative w-full">
          <img
            src={programsbanner}
            alt="faculty"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

          {/* Text content on the left side */}
          <div className="absolute inset-0 flex justify-start items-center pr-10 z-10 h-screen ml-40">
            <div className="text-center bg-primary-color w-28 h-3/6">
              <div className="text-8xl text-white font-semibold py-4 px-6">
                Computer Science Department's Programs
              </div>
              <div className="text-6xl text-white font-semibold mt-5 py-4 px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsBanner;
