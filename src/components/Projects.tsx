
const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    { title: 'Project 3', description: 'Description of project 3', link: '#' },
  ];

  return (
    <section id="projects" className="p-5">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-4 space-y-4">
        {projectList.map((project, index) => (
          <li key={index} className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-xl">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;