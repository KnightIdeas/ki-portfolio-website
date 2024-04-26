import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='project'>
            <div className='project-image'>
                <img src={project.image !== 'N/A' ? project.image : 'http://via.placeholder.com/400'} alt={project.title} />
            </div>
            <div className='project-details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.technologies.join(", ")}</span>
            </div>
        </div>
    );
}

export default ProjectCard;