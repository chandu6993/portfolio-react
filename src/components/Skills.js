import React from 'react';

const Skills = () => {
  const skills = [ 'HTML', 'CSS','bootstrap', 'JavaScript','React','Python',];

  return (
    <section>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
