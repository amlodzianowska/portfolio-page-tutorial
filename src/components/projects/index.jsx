import ProjectLayout from "./ProjectLayout";

function ProjectsList({projects}) {
  return (
    <div className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>
        {projects.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
        })}
    </div>
  )
}

export default ProjectsList;