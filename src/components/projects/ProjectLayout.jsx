import React from 'react'

const ProjectLayout = ({name, descrioption, date, demoLink}) => {
  return (
    <div className='flex items-cente justify-between w-full relative rounded-lg overflow-hidden p-6'>{name}</div>
  )
}

export default ProjectLayout