import React from 'react';
import DocumentContainer from '../containers/DocumentContainer';
import ControlsContainer from '../containers/ControlsContainer';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <ControlsContainer />
      <DocumentContainer />
    </>
  );
}
