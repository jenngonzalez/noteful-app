import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import { Link } from 'react-router-dom';
import './FolderNotes.css';

export default class FolderNotes extends Component {

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const note = notes.filter(n =>
            n.folderId === this.props.match.params.folderID
        )
        const uniqueNote = note.map((n, index) =>
            <li key={index}>
                <Link
                    to={`/note/${n.id}`}
                    key={n.id}
                    aria-label={`"See contents of this note: ${n.name}"`}
                >
                    {n.name}
                </Link>
            </li>
        )
    
        return (
            <ul className="folder-notes-list">
                {uniqueNote}
            </ul>
        )
    }
}