import React, { Component } from 'react';
import { format } from 'date-fns'
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
import deleteNote from './delete-note';
import "./NoteNote.css"




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
                onClick={() => {
                    deleteNote(selectedNote.id, this.context.deleteNote, this.props.history)
                }}
            >
                Delete note
            </button>
        </div>
        )
    }
}



NoteNote.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}