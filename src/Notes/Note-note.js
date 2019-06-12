import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
// import STORE from '../dummy-store';
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
            <p>{selectedNote.modified}</p>
        </div>
        )
    }
}



// when you click on a note, this component appears showing the note name, content, and date modified