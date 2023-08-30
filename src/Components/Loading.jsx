import React from 'react'
import ring from "../assets/ring.gif"
function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
         <img className='w-32' src={ring} alt="" />
    </div>
  )
}

export default Loading