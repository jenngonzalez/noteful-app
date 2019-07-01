import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../Noteful-context';
import './FolderSidebar.css';


export default class FolderSidebar extends Component {

    static contextType = NotefulContext

    render() {
        const { folders } = this.context

        const sidebarFolders = folders.map(folder =>
            <li key={folder.id}>
                <NavLink
                    to={`/folder/${folder.id}`}
                    activeClassName="current"
                    key={folder.id}
                >
                    {folder.name}
                </NavLink>
            </li>
        )
        return (
            <ul className="folder-list">
                {sidebarFolders}
            </ul>
        )
    }
}