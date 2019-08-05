import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotefulContext from '../Noteful-context';
import './MainSidebar.css';

// TODO: why is the folderID on props.match.params a STRING and not an INTEGER? === must be changed to == to get equality

export default class MainSidebar extends Component {

    static contextType = NotefulContext;

    render() {
        const { folders } = this.context

        const sidebarFolders = folders.map(folder =>
            <li key={folder.id}>
                <NavLink
                    to={`/folder/${folder.id}`}
                    key={folder.id}
                    activeClassName="current"
                    aria-label={`"See notes in this folder: ${folder.name}"`}
                >
                    {folder.name}
                </NavLink>
            </li>
        )

        return (
            <div className="main-sidebar">
                <ul className="folder-list">
                    {sidebarFolders}
                    <li id="new-folder">
                        <Link to='/add-folder'>
                            Add New Folder
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}