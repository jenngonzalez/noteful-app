import React from 'react';
import STORE from './dummy-store';
import './Folder-notes.css';

export default function FolderNotes(props) {
    const note = STORE.notes.filter(n =>
        n.folderId === props.match.params.folderID
    )
    const uniqueNote = note.map((n, index) =>
        <li key={index}>
         {n.name}
        </li>    
    )
    console.log({note})
    return (
            <ul className="folder-notes-list">
                {uniqueNote}
            </ul>
        )
}