
'use client'

import ProjectCarousel from "./components/ProjectCarousel";

interface ProjectSchema {
}
const Projects = () => {
    const projects: ProjectSchema[] = [{}]

    return (
        <div>
            <ProjectCarousel />
        </div>)
}



export default Projects;