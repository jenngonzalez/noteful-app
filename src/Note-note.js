import React from 'react';
import STORE from './dummy-store';

export default function NoteNote(props) {
    const selectedNote = STORE.notes.find(note =>
        note.id === props.match.params.noteID
    )
    return (
        <div>
            <p>{selectedNote.content}</p>
            <p>{selectedNote.modified}</p>
        </div>
    )
}



// when you click on a note, this component appears showing the note name, content, and date modified