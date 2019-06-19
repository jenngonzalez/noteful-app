import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import config from '../config';
import './AddNote.css';

class AddNote extends Component {

    static contextType = NotefulContext

    state = {
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { noteName } = e.target
        const newNoteName = noteName.value
        const { noteContent } = e.target
        const newNoteContent = noteContent.value
        const selectedFolder = document.getElementById("noteFolder")
        const noteFolder = selectedFolder.options[selectedFolder.selectedIndex]
        const noteFolderId = noteFolder.id
        const dateAdded = new Date()
        const newId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const newNote = {
            id: newId,
            name: newNoteName,
            modified: dateAdded,
            folderId: noteFolderId,
            content: newNoteContent
        }

        this.setState({ error: null })
        fetch(config.API_NOTES, {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(error => {
                        throw error
                    })
                }
                return response.json()
            })
            .then(data => {
                noteName.value=''
                noteContent.value=''
                this.context.addNote(data)
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render() {

        const { folders } = this.context
        const folderList = folders.map(folder =>
            <option value={folder.name} key={folder.id} id={folder.id}>{folder.name}</option>
        )

        return(
            <form className="add-note-form" onSubmit={this.handleSubmit}>
                <label htmlFor="noteName">
                    Note Name:
                </label>
                <input type="text" name="noteName" id="noteName" required>
                </input>
                <label htmlFor="noteContent">
                    Note Content:
                </label>
                {/* <input type="text" name="noteContent" id="noteContent">
                </input> */}
                <textarea name="noteContent" id="noteContent">
                </textarea>
                <label htmlFor="noteFolder">
                    Select Folder:
                </label>
                <select name="noteFolder" id="noteFolder">
                    {folderList}
                </select>
                <button type="submit">
                    Add Note
                </button>
                <button type="button" onClick={this.handleClickCancel}>
                    Cancel
                </button>
            </form>
        )
    }
}

export default AddNote