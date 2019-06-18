import React from 'react';

const NotefulContext = React.createContext({
    //what here?
    // what will be in state?
    // context needs the shape of the data
    folders: [],
    notes: [],
    deleteNote: () => {},
    addFolder: () => {},
    // addNote()
})

export default NotefulContext