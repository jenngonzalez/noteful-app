import React, { Component } from 'react';
import { format } from 'date-fns'
import NotefulContext from '../Noteful-context';
import deleteNote from './delete-note';
import "./Note-note.css"




export default class NoteNote extends Component {

    static contextType = NotefulContext;


    render() {
        const { notes } = this.context
        const selectedNote = notes.find(note =>
            note.id === this.props.match.params.noteID
        )

        return (
        <div className="note-body">
            <p>{selectedNote.content}</p>
            <p>Modified: {format(selectedNote.modified, 'Do MMM YYYY')}</p>
            <button
                type="button"
                // onClick={this.handleDeleteNote}
                onClick={() => {
                    deleteNote(selectedNote.id, this.context.deleteNote)
                }}
            >
                Delete note
            </button>
        </div>
        )
    }
}



// when you click on a note, this component appears showing the note name, content, and date modified

// delete - if successful, redirect to "/" path

// to delete notes - make a DELETE request to the /notes/<note-id> endpoint

//You can implement the DELETE request in the component that owns the delete button, and then use a callback context value to update the state in your top level component.

// After making successful a DELETE request, you can use a this.state.notes.filter method along with setState to remove a note from state and update context.
