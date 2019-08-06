import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
import './NoteSidebar.css';

export default class NoteSidebar extends Component {

    static contextType = NotefulContext;

    render() {
        const { folders} = this.context;
        const { notes } = this.context;
        const findNote = notes.find(n =>
            n.id === Number(this.props.match.params.noteID)
        )
        
        const findFolder = findNote.folder_id

        const selectedFolder = folders.find(f =>
            f.id === findFolder
        )

        return (
            <div className="note-folder">
                <button
                    type='button'
                    onClick={this.props.history.goBack}
                >
                    Back
                </button>
                <div className="folder-name">          {selectedFolder.name}
                </div>
            </div>
        )
    }
}



NoteSidebar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}