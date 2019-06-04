import React, { Component } from 'react';
import STORE from './dummy-store';
import { NavLink } from 'react-router-dom';
import './Folder-sidebar.css';
import FolderNotes from './Folder-notes';


export default class FolderSidebar extends Component {
    render() {
        const folders = STORE.folders.map(folder =>
            // <li key={folder.id}>
            //     <NavLink
            //         to={`/folder/${folder.id}`}
            //         activeClassName="current"
            //     >
            //         {folder.name}
            //     </NavLink>
            // </li>

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
                {folders}
            </ul>
        )
    }
}