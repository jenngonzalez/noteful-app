import React from 'react';
import { Link } from 'react-router-dom';
import STORE from './dummy-store';
import './Folder-notes.css';

export default function FolderNotes(props) {
    const note = STORE.notes.filter(n =>
        n.folderId === props.match.params.folderID
    )
    const uniqueNote = note.map((n, index) =>
        <li key={index}>
            <Link to={`/note/${n.id}`}>
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