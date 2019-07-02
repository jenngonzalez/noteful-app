import React from 'react';
import ReactDOM from 'react-dom';
import FolderNotes from './FolderNotes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FolderNotes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
