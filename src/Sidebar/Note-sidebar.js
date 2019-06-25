import React, { Component } from 'react';
// import STORE from '../dummy-store';
import NotefulContext from '../Noteful-context';
import PropTypes from 'prop-types';
import './Note-sidebar.css';

export default class NoteSidebar extends Component {

    static contextType = NotefulContext;

    render() {
        const { folders} = this.context;
        const { notes } = this.context;
        const findNote = notes.find(n =>
            n.id === this.props.match.params.noteID
        )
        
        const findFolder = findNote.folderId

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
                <p>{selectedFolder.name}</p>
            </div>
        )
    }
}


// this component should include a "back" button (use programmatic navigation) and the name of the current folder

// need to find the folderId that matches the current note's folderId

NoteSidebar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}