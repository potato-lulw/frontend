import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='py-4'>

        <h1 className='font-bold text-3xl text-center text-text-50 '>{title}</h1>
        <h2 className='font-medium text-primary text-center'>{subtitle}</h2>
      </div>
  )
}

export default Heading