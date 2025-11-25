"use client";
import { IconContext } from "react-icons";

const ServiceSection = ({ icon, title, text }) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 flex items-start gap-5 hover:shadow-md transition-all duration-300">
      
      
      <IconContext.Provider value={{ size: "50px", className: "text-teal-600" }}>
        <div className="min-w-[60px]">{icon}</div>
      </IconContext.Provider>

     
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm leading-relaxed">{text}</p>
      </div>

    </div>
  );
};

export default ServiceSection;
