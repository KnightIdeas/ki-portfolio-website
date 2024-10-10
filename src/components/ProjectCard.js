import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project, onClick }) => {
    return (
        <div className='project' onClick={onClick}>
            <div className='project-image'>
                <img src={project.image !== 'N/A' ? project.image : 'http://via.placeholder.com/400'} alt={project.title} />
            </div>
            <div className='project-details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='technologies'>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className={tech.type === 'fontawesome' ? 'icon-class-fa' : 'icon-class'} data-tooltip={tech.tooltip}>{tech.icon}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;