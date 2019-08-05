import React from 'react';
import ReactDOM from 'react-dom';
import MainNotes from './MainNotes';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainNotes context={`notes: [{id: '123', content: 'samplenote'}]`} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
