import React from 'react'

const Skills = () => {
  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold text-center mb-6'>My SKills</h2>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <div className='bg-yellow-500 p-4 text-center'>HTML</div>
        <div className='bg-yellow-500 p-4 text-center'>CSS</div>
        <div className='bg-yellow-500 p-4 text-center'>TailwindCSS</div>
        <div className='bg-yellow-500 p-4 text-center'>Nextjs</div>
      </div>
    </section>
  )
}

export default Skills