import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "DriveEasy-A Car rental app",
    year: "July 2025",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "drive-easy-chi.vercel.app/",
  },
  {
    name: "Bookly- Booking App",
    year: "April 2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "GreenCart- Grocery delivery app",
    year: "May 2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Paste App",
    year: "Jan 2025",
    align: "left",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
