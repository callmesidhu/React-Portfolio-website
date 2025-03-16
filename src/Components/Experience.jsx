import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "IEEE Kerala Section",
      type: "Internship",
      duration: "Mar 2025 - Present · 1 mo",
      location: "Kerala, India",
      skills: ["Node.js"],
    },
    {
      title: "Vue.js Developer",
      company: "Eskay's Science Centre",
      type: "Part-time",
      duration: "Nov 2024 - Present · 5 mos",
      location: "Punalur, Kerala, India",
      description: "An entrance-based training centre from Punalur.",
      skills: ["Vue.js", "TypeScript", "Figma", "Tailwind CSS"],
    },
    {
      title: "Web Master",
      company: "IEDC CET",
      duration: "Jan 2025 - Present · 3 mos",
      location: "Thiruvananthapuram, Kerala, India",
      description: "IEDC CET Execome'25 Web Team Head",
    },
    {
      title: "Web Team Head",
      company: "AeroCET",
      duration: "Jan 2025 - Present · 3 mos",
      location: "Thiruvananthapuram, Kerala, India",
      skills: ["Docker", "MERN Stack", "Web Development"],
    },
    {
      title: "Web Developer",
      company: "AeroCET",
      duration: "Aug 2024 - Present · 8 mos",
      location: "Trivandrum, Kerala, India",
      skills: ["MERN Stack", "Web Development"],
    },
    {
      title: "Technical Team Member",
      company: "AeroCET",
      duration: "Mar 2024 - Present · 1 yr 1 mo",
      location: "Trivandrum, Kerala, India",
      description: "AeroCET Web Developer and Technical Team member",
      skills: ["Aerodynamics", "RC Plane Manufacturing"],
    },
    {
      title: "Web Developer",
      company: "T PRO BONO",
      type: "Internship",
      duration: "Oct 2024 - Present · 6 mos",
      location: "Trivandrum, Kerala, India",
      description: "TProBono is a startup from CET",
      skills: ["Next.js", "Tailwind CSS", "Figma", "TypeScript"],
    },
    {
      title: "Web Team",
      company: "ASME CET",
      duration: "Aug 2024 - Present · 8 mos",
      location: "Trivandrum, Kerala, India",
      description: "Web developer and UI designer at ASME",
      skills: ["Next.js", "Tailwind CSS", "Firebase", "Figma", "TypeScript"],
    },
    {
      title: "Web Team",
      company: "AstroCET",
      duration: "Feb 2025 - Present · 2 mos",
      description: "Astronomy club of the CET",
    },
    {
      title: "IEA-CET Web Team Head",
      company: "College of Engineering, Trivandrum (CET)",
      duration: "Dec 2023 - Present · 1 yr 4 mos",
      location: "Trivandrum, Kerala, India",
      description: "(Industrial Engineering Association) CET - Web Head",
      skills: ["React.js", "HTML5", "Tailwind CSS", "CSS", "JavaScript"],
    },
    {
      title: "NSS CET Energy Cell",
      company: "National Service Scheme",
      duration: "Oct 2024 - Present · 6 mos",
      location: "Trivandrum, Kerala, India",
      description: "NSS CET Energy Cell Subpanel member",
    },
    {
      title: "Industrial Engineering Class Representative",
      company: "College of Engineering Trivandrum",
      duration: "Sep 2023 - Jan 2024 · 5 mos",
      location: "Trivandrum, Kerala, India",
      description: "B.Tech IE Semester 1 Class Representative of Industrial Engineering.",
    },
    {
      title: "Little Kites",
      company: "KITE- Kerala Infrastructure and Technology for Education",
      duration: "Jun 2018 - Jan 2020 · 1 yr 8 mos",
      location: "Punalur, Kerala, India",
      description: "Member of Little Kites unit of NSVHS Valacode",
      skills: ["Python", "Scratch", "HTML5", "CSS", "Microsoft PowerPoint", "Microsoft Excel", "Microsoft Word"],
    },
  ];


  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Experience (not completed)</h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-gray-700 pl-6 max-w-3xl">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold">
              {index + 1}
            </div>

            {/* Experience Content */}
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-lg text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
              {exp.description && <p className="mt-2 text-gray-400">{exp.description}</p>}
              {exp.skills && (
                <p className="mt-2 text-sm text-gray-300">
                  <strong>Skills:</strong> {exp.skills.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
