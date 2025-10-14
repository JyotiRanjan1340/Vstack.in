import React from 'react';

const skills = [
  "JavaScript (ES6+)",
  "React / Next.js",
  "Node.js",
  "Python",
  "Automation (Selenium, Puppeteer)",
  "REST APIs",
  "HTML5 & CSS3",
  "Git & GitHub",
  "CI/CD & DevOps Basics",
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}