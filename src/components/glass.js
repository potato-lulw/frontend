import React from 'react'
import Heading from './heading'
import StoryContent from './story-content'

const Glass = () => {
  const content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non et quasi, ab voluptates illo veniam sunt voluptate nesciunt necessitatibus rem similique, voluptas ut possimus odit debitis laboriosam consectetur cupiditate reprehenderit eius nisi dolorem. Perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis consequuntur impedit 
  \n
  accusamus repellat, reprehenderit possimus laborum, quo dicta doloremque, dignissimos ullam et commodi molestias dolores voluptate odio facere nam eaque quod laboriosam facilis voluptates nemo deserunt quae. Quis, accusamus, iure eius ratione quidem architecto aperiam aspernatur numquam praesentium voluptas veritatis?`;

  
  return (
    <div className='items-center md:w-[80%] w-full flex flex-col z-20 bg-[#060c21] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-blue-850 p-10 shadow-[inset_-1px_-1px_5px_#fff]'>
        <Heading title="dummy title" subtitle = "dummy subttile"/> 
        <img src="https://source.unsplash.com/random" alt="story-img" width={600} height={400} className='overflow-hidden rounded-lg'/>
        <StoryContent content={content}/> 
    </div>
  )
  
}

export default Glass