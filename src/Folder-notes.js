import React from 'react';
import { Link } from 'react-router-dom';
import STORE from './dummy-store';
import './Folder-notes.css';

export default function FolderNotes(props) {
    const note = STORE.notes.filter(n =>
        n.folderId === props.match.params.folderID
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