import React from 'react'
import { Link } from 'react-router-dom'
import homeicon from '../../../src/homeschicon.jpg'

function AdminDashBoard() {
  return (
    <div className='app-cotainer text-center'>    
      <div className='notes-list justify-between'>
        <Link to='Admins'>
          <div className='w-80 h-40 bg-blue-300 rounded-md items-center justify-center'>
        <h1 className='justify-center text-3xl font-extrabold'>4</h1>
        <h1 className='justify-center'>Admins</h1>
      </div>
        </Link>
        <Link to='Students'>
      <div className='w-80 h-40 bg-blue-300 rounded-md items-center justify-center '>
        <h1 className='justify-center text-3xl font-extrabold'>26</h1>
        <h1 className='justify-center'>STUDENTS</h1>
      </div>
      </Link>
      <Link to='Teachers'>
      <div className='w-80 h-40 bg-blue-300 rounded-md items-center justify-center '>
        <h1 className='justify-center text-3xl font-extrabold'>10</h1>
        <h1 className='justify-center'>TEACHERS</h1>
      </div>
      </Link>
      <Link to='Parents'>
      <div className='w-80 h-40 bg-blue-300 rounded-md items-center justify-center '>
        <h1 className='justify-center text-3xl font-extrabold'>12</h1>
        <h1 className='justify-center'>PARENTS</h1>
      </div>
      </Link>
      </div>  
  </div>
    
  )
}

export default AdminDashBoard
