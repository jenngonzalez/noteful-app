import React from 'react';

const NotefulContext = React.createContext({
    //what here?
    // what will be in state?
    // context needs the shape of the data
    folders: [],
    notes: [],
    addFolder: () => {},
    updateFolder: () => {},
    deleteFolder: () => {},
    addNote: () => {},
    updateNote: () => {},
    deleteNote: () => {}
})

export default NotefulContext