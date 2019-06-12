import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import { Link } from 'react-router-dom';
// import STORE from '../dummy-store';
import './Folder-notes.css';

export default class FolderNotes extends Component {

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const note = notes.filter(n =>
            n.folderId === this.props.match.params.folderID
        )
        const uniqueNote = note.map((n, index) =>
            <Link
                to={`/note/${n.id}`}
                key={n.id}
            >
                <li key={index}>
                    {n.name}
                </li>
            </Link>
        )
    
        return (
            <ul className="folder-notes-list">
                {uniqueNote}
            </ul>
        )
    }
}