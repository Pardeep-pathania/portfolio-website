import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <div className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-auto border-2 border-orange-500 border-dashed rounded-2xl mt-12 p-4  ">
      <p className="font-bold text-cyan-500">{experience.job}</p>
      <p className="text-orange-500">{experience.company}</p>
      <p className="text-gray-300">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibility.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExperience;
