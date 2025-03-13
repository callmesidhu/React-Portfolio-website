import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import '../App.css';

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from project.json
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="flex flex-col items-center py-12 lg:min-h-screen">
      <h2 className="text-center text-4xl m-4 font-black text-white">Projects</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="lg:w-[450px] lg:h-[600px] w-[320px] h-[450px] rounded-[15px] overflow-hidden shadow-lg"
      >
        {projects.slice().reverse().map((project) => (
          <SwiperSlide key={project.id} className="bg-gray-900 project-card">
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="project-image p-3 rounded-lg" />

            {/* Content Section */}
            <div className="project-content p-6">
              <h3 className="lg:text-2xl text-lg font-semibold">{project.title}</h3>

              {/* Tech Stack */}
              {project.tech && (
                <p className="lg:text-md text-sm mt-1 bg-gray-700 px-2 py-1 rounded-md w-max text-gray-300">
                  {project.tech}
                </p>
              )}

              <p className="text-sm mt-2">{project.description}</p>
            </div>

            {/* View Project Button (Fixed at Bottom) */}
            <div className="project-button text-lg">
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
