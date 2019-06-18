// implement Add Folder button in App nav
// display component with /add-folder path


import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
import config from '../config';


class AddFolder extends Component {

    static contextType = NotefulContext;

    state = {
        error: null
    }

    handleSubmit = e => {
        console.log('hello')
        e.preventDefault();
        const { folderName } = e.target
        const userFolder = folderName.value
        const newId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(newId)
        console.log(userFolder)
        const newFolder = {
            id: newId,
            name: userFolder
        }
        this.setState({ error: null })
        fetch(config.API_FOLDERS, {
            method: 'POST',
            body: JSON.stringify(newFolder),
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
                folderName.value=''
                this.context.addFolder(data)
                this.props.history.push('/')
            })
            // .then(this.props.history.push('/'))
            .catch(error => {
                this.setState({ error })
            })
    }


    handleClickCancel = () => {
        this.props.history.push('/')
      };

    render() {
        return (
            <form className="add-folder-form" onSubmit={this.handleSubmit}>
                <label htmlFor="folderName">
                    New Folder Name
                </label>
                <input type="text" name="folderName" id="folderName" required>
                </input>
                <button
                    type="submit"
                    // onSubmit={e => this.handleSubmit(e)}
                >
                    Add Folder
                </button>
                <button type="button" onClick={this.handleClickCancel}>
                    Cancel
                </button>
            </form>
        )
    }
}


export default AddFolder

AddFolder.propTypes = {
    folder: PropTypes.string
}