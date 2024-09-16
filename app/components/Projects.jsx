import React from 'react'
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  return (
    <div className="mb-20">
    <h2 className="text-4xl font-bold text-white mb-9">Projects</h2>
    <p className="mb-5 text-base lg:text-lg text-white">
      I love to learn about the growing world of technology and explore new programming languages through building projects or just watching videos. View some of my projects below!
    </p>
    <div className="flex flex-row space-x-10 ">
      <ProjectCard imageurl="/images/cookbook.png" name="Cookbook" githuburl="https://github.com/steve-weng/Cookbook" />
      <ProjectCard imageurl="/images/e-shop.png" name="E-Shop" githuburl="https://github.com/zxlinw/E-Shop" />
      <ProjectCard imageurl="/images/pantrypal.png" name="PantryPal" githuburl="https://github.com/jkmathilda/PantryPal" />

    </div>
    </div>
    
      
  )
}

export default Projects;