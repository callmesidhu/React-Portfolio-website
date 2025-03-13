import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import '../App.css'

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';



const projects = [
  {
    id: 1,
    title: 'Project 1',
    tech: 'React, Tailwind CSS',
    description: 'Description of project 1',
    link: 'https://callmesidhu.com/project1',
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 2,
    title: 'Project 2',
    tech: 'Node.js, Express, MongoDB',
    description: 'Description of project 2',
    link: 'https://callmesidhu.com/project2',
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 3,
    title: 'Project 3',
    tech: 'Flutter, Firebase',
    description: 'Description of project 3',
    link: 'https://callmesidhu.com/project3',
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 4,
    title: 'Project 4',
    tech: 'Next.js, TypeScript',
    description: 'Description of project 4',
    link: 'https://callmesidhu.com/project4',
    image: 'https://dummyimage.com/600x400/000/fff',
  },
  {
    id: 5,
    title: 'Project 5',
    tech: 'Laravel, MySQL',
    description: 'Description of project 5',
    link: 'https://callmesidhu.com/project5',
    image: 'https://dummyimage.com/600x400/000/fff',
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-center text-4xl m-4 font-black text-white">Projects</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-[320px] h-[420px] rounded-[15px] overflow-hidden shadow-lg"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="bg-gray-900 project-card">
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="project-image p-3 rounded-lg" />

            {/* Content Section */}
            <div className="project-content">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* Tech Stack */}
              {project.tech && (
                <p className="text-xs mt-1 bg-gray-700 px-2 py-1 rounded-md w-max text-gray-300">
                  {project.tech}
                </p>
              )}

              <p className="text-sm mt-2">{project.description}</p>
            </div>

            {/* View Project Button (Fixed at Bottom) */}
            <div className="project-button ">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
