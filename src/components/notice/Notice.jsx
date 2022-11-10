import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Notice({id,text,date, handleDeleteNote}) {
  return (
    <div className='notes'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever 
        onClick={()=> handleDeleteNote(id)} 
        size='1.3rem' 
        className='delete-icon'/>
      </div>
    </div>
  )
}

export default Notice
