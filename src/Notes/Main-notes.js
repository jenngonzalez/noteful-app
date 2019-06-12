import React, { Component } from 'react';
import NotefulContext from '../Noteful-context';
import { Link } from 'react-router-dom';
// import STORE from '../dummy-store';
import './Main-notes.css'

export default class MainNotes extends Component {

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const allNotes = notes.map(note => 

            <Link
                to={`/note/${note.id}`}
                key={note.id}
            >
                <li key={note.id}>
                    {note.name}
                </li>
            </Link>    
        )
        return (
            <ul className="note-list">
                {allNotes}
            </ul>
        )
    }
}