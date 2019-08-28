import React from 'react';
import PropTypes from 'prop-types';

const DocumentList = ({ documents }) => {

  const documentList = documents.map((doc, i) => (
    <li key={i}>
      <button>Sheet {i}</button>
    </li>
  ));

  return (
    <ul>
      {documentList}
    </ul>
  );
};

DocumentList.propTypes = { 
  documents: PropTypes.array.isRequired
};

export default DocumentList;
