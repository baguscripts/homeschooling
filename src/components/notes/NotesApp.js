import { notStrictEqual } from 'assert';
import React, { useState } from 'react'
import { MdNearMeDisabled } from 'react-icons/md';
import Search from '../Search';
import NotesList from './NotesList'

function NotesApp() {
    const[notes, setNotes]=useState([
        {
            id:"1",
            text:"for real",
            date:"15/4/12"
        },
        {
            id:"2",
            text:"this is my second note ",
            date:"15/4/12"
        },
        {
            id:"3",
            text:"never hatin",
            date:"15/4/12"
        },
        {
            id:"4",
            text:"this is my fourth note ",
            date:"15/4/12"
        },
    ]);

    const[searchText, setSearchText]=useState('');

    const addNote =(text)=>{
      const date = new Date();
      const newNote ={
        text:text,
        date:date.toLocaleDateString(),
            };
            const newNotes = [...notes, newNote];
            setNotes(newNotes);
        }

        const deleteNote =(id)=>{
          const newNotes = notes.filter((note)=> note.id !== id);
          setNotes(newNotes)
        }
  return (
    <div>
      <Search handleSearchNote={setSearchText}/> 
      <NotesList 
      notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default NotesApp
