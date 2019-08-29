import React from 'react';
import PropTypes from 'prop-types';
import DocumentForm from './DocumentForm';

const styles = {
  section: {
    padding: 10
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    padding: 0
  }
};

const DocumentList = ({ documents, inputValue, handleChange, handleFormSubmit, handleSelect }) => {

  const documentList = documents.map((doc, i) => (
    <li key={i}>
      <button onClick={() => handleSelect(i)}>{doc.title}</button>
    </li>
  ));

  return (
    <section style={styles.section}>
      <ul style={styles.list}>
        {documentList}
      </ul>
      <DocumentForm 
        inputValue={inputValue} 
        handleChange={handleChange} 
        handleSubmit={handleFormSubmit}
      />
    </section> 
  );
};

DocumentList.propTypes = { 
  documents: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default DocumentList;
