import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import STORE from './dummy-store';
import './Main-sidebar.css';

export default class MainSidebar extends Component {
    render() {
        const folders = STORE.folders.map(folder =>
            <li key={folder.id}>
                <NavLink
                    to={`/folder/${folder.id}`}
                >
                    {folder.name}
                </NavLink>
            </li>
        )
        return (
            <ul className="folder-list">
                {folders}
            </ul>
        )
    }
}