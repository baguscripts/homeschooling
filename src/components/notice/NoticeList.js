import React from 'react'
import Notes from '../notes/Notes'
import AddNote from './AddNotice'


function NoticeList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes-list'>
     {notes.map((note)=>
      <Notes 
      id={note.id} 
      text={note.text} 
      date={note.date}
      handleDeleteNote={handleDeleteNote}
      />)}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoticeList
