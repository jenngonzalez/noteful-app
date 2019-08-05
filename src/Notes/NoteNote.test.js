import React from 'react';
import ReactDOM from 'react-dom';
import NoteNote from './NoteNote';

it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteNote context={`notes: [{id: '123', content: 'samplenote'}]`} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  