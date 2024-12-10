import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'Description for project 1.' },
    { title: 'Project 2', description: 'Description for project 2.' },
  ];

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
