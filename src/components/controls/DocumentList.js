import React from 'react';
import PropTypes from 'prop-types';
import DocumentForm from './DocumentForm';

const DocumentList = ({ documents, inputValue, handleChange, handleFormSubmit }) => {

  const documentList = documents.map((doc, i) => (
    <li key={i}>
      <button>{doc.title}</button>
    </li>
  ));

  return (
    <ul>
      {documentList}
      <li>
        <DocumentForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleFormSubmit}/>
      </li>
    </ul>
  );
};

DocumentList.propTypes = { 
  documents: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DocumentList;
