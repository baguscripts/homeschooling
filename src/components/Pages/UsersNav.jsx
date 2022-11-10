import React from 'react'
import { Link } from 'react-router-dom'

function UsersNav() {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='justify-evenly p-7'>
        <Link to={'/Admins'}><h1>Admins</h1></Link>
          <Link to={'/Admins'}><h1>Admins</h1></Link>
        </div>
        <div className='justify-evenly p-7'>
        <Link to={'/Students'}><h1>Students</h1></Link>
          <Link to={'/Students'}><h1>Students</h1></Link>
        </div>
        <div className='justify-evenly p-7'>
        <Link to={'/Teachers'}><h1>Teachers</h1></Link>
          <Link to={'/Teachers'}><h1>Teachers</h1></Link>
        </div>
        <div className='justify-evenly p-7'>
        <Link to={'/Parents'}><h1>Parents</h1></Link>
        <Link to={'/Parents'}><h1>Parents</h1></Link>
        </div>
    </div>
  )
}

export default UsersNav
