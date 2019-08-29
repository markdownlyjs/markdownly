import React from 'react';
import PropTypes from 'prop-types';
import AddDocument from '../../containers/AddDocument';

const DocumentList = ({ documents }) => {

  const documentList = documents.map((doc, i) => (
    <li key={i}>
      <button>Sheet {i}</button>
    </li>
  ));

  return (
    <ul>
      {documentList}
      <li>
        <AddDocument />
      </li>
    </ul>
  );
};

DocumentList.propTypes = { 
  documents: PropTypes.array.isRequired
};

export default DocumentList;
