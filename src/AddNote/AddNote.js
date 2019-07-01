import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
import config from '../config';
import './AddNote.css';

class AddNote extends Component {

    static contextType = NotefulContext

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            newNote: '',
            newFolderName: '',
            newContent: '',
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFolder = this.handleChangeFolder.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeName(event) {
        this.setState({newNote: event.target.value})
    }

    handleChangeFolder(event) {
        this.setState({newFolderName: event.target.value})
    }

    handleChangeContent(event) {
        this.setState({newContent: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.newFolderName);
        const { noteName } = e.target
        // const newNoteName = noteName.value
        const newNoteName = this.state.newNote;
        const { noteContent } = e.target
        // const newNoteContent = noteContent.value
        const newNoteContent = this.state.newContent;
        const selectedFolder = document.getElementById("noteFolder")
        // const selectedFolder = this.state.newFolderName;
        // how to rework this to call from state?
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
                <input type="text" name="noteName" id="noteName" required onChange={this.handleChangeName}>
                </input>
                <label htmlFor="noteContent">
                    Note Content:
                </label>
                <textarea name="noteContent" id="noteContent" onChange={this.handleChangeContent} required>
                </textarea>
                <label htmlFor="noteFolder">
                    Select Folder:
                </label>
                <select name="noteFolder" id="noteFolder" onChange={this.handleChangeFolder} required>
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

AddNote.propTypes = {
    history: PropTypes.object
}