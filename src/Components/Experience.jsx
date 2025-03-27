import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "IEEE Kerala Section",
      type: "Internship",
      startDate: "Mar 2025",
      endDate: "Present",
      location: "Kerala, India",
      skills: ["Node.js"],
    },
    {
      title: "Vue.js Developer",
      company: "Eskay's Science Centre",
      type: "Part-time",
      startDate: "Nov 2024",
      endDate: "Present",
      location: "Punalur, Kerala, India",
      description: "An entrance-based training centre from Punalur.",
      skills: ["Vue.js", "TypeScript", "Figma", "Tailwind CSS"],
    },
    // Add other experiences here...
  ];

  // Function to calculate duration in months/years
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();

    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(diffInMonths / 12);
      const months = diffInMonths % 12;
      return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
    }
  };

  // State for tracking visibility of the Experience section
  const [inView, setInView] = useState(false);
  const experienceRef = useRef(null);

  // Observer to track when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={experienceRef}
      className="flex flex-col items-center min-h-screen bg-black text-white px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-gray-700 pl-6 max-w-3xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-8 relative"
            initial={{ opacity: 0, x: 50 }} // Initial state (offscreen)
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} // Animate when section comes into view
            transition={{
              duration: 1,
              delay: index * 0.2, // Staggered animation
            }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold">
              {index + 1}
            </div>

            {/* Experience Content */}
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-lg text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {`${exp.startDate} - ${exp.endDate !== "Present" ? exp.endDate : "Current Month, Year"} · ${calculateDuration(
                  exp.startDate,
                  exp.endDate
                )}`}
              </p>
              {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
              {exp.description && <p className="mt-2 text-gray-400">{exp.description}</p>}
              {exp.skills && (
                <p className="mt-2 text-sm text-gray-300">
                  <strong>Skills:</strong> {exp.skills.join(", ")}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
