import React, { Component } from 'react';
// import STORE from '../dummy-store';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../Noteful-context';
import './Folder-sidebar.css';
// import FolderNotes from './Folder-notes';


export default class FolderSidebar extends Component {

    static contextType = NotefulContext

    render() {
        const { folders } = this.context

        const sidebarFolders = folders.map(folder =>
            <NavLink
                to={`/folder/${folder.id}`}
                activeClassName="current"
                key={folder.id}
            >
                <li key={folder.id}>
                    {folder.name}
                </li>
            </NavLink>
        )
        return (
            <ul className="folder-list">
                {sidebarFolders}
            </ul>
        )
    }
}