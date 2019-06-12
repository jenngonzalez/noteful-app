import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../Noteful-context';
// import STORE from '../dummy-store';
import './Main-sidebar.css';

export default class MainSidebar extends Component {

    static contextType = NotefulContext;

    render() {
        const { folders } = this.context

        const sidebarFolders = folders.map(folder =>
            <NavLink
                to={`/folder/${folder.id}`}
                key={folder.id}
                activeClassName="current"
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