import React from 'react';
import DocumentContainer from '../containers/DocumentContainer';
import DocumentList from './controls/DocumentList';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <DocumentList documents={[]} />
      <DocumentContainer />
    </>
  );
}
