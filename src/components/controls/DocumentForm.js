import React from 'react';
import PropTypes from 'prop-types';

const DocumentForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <form onSubmit={e => handleSubmit(e, inputValue)}>
      <input 
        name="inputValue" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder='Add a document'
      />
      <button>+</button>
    </form>
  );
};

DocumentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
};

export default DocumentForm;
