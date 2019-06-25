import React, { Component } from 'react';
import { format } from 'date-fns'
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
// import deleteNote from './delete-note';
import config from '../config';
import "./Note-note.css"




export default class NoteNote extends Component {

    static contextType = NotefulContext;


    deleteNote(noteId, callback) {
        fetch(config.API_NOTES + `${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => {
            if(!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        }).then(data=> {
            callback(noteId)
        }).then(this.props.history.push('/'))
        
        .catch(error => {
            console.error(error)
        })
    }

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
                    this.deleteNote(selectedNote.id, this.context.deleteNote)
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