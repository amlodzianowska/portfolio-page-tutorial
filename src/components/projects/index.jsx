import ProjectLayout from "./ProjectLayout";

function ProjectsList({projects}) {
  return (
    <div>
        {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
        })}
    </div>
  )
}

export default ProjectsList;