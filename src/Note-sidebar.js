import React from 'react';
import STORE from './dummy-store';

export default function NoteSidebar(props) {

    const findNote = STORE.notes.find(n =>
    n.id === props.match.params.noteID
    )
    
    const findFolder = findNote.folderId

    const selectedFolder = STORE.folders.find(f =>
    f.id === findFolder
    )

    return (
        <div>
            <button
                // onClick={props.history.goBack()}
            >
                Back
            </button>
            <p>{selectedFolder.name}</p>
        </div>
    )
}


// this component should include a "back" button (use programmatic navigation) and the name of the current folder

// need to find the folderId that matches the current note's folderId