import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDocument, selectDocument } from '../actions/documentActions';
import DocumentList from '../components/controls/DocumentList';
import { getDocumentsList } from '../selectors/documentSelector';

class ControlsContainer extends React.Component {
  static propTypes ={
    handleSubmit: PropTypes.func.isRequired,
    documents: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
  };

  state = {
    inputValue: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleFormSubmit = (e, title) => {
    e.preventDefault();
    this.props.handleSubmit(title);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    const { documents, handleSelect } = this.props;
    return <DocumentList
      documents={documents}
      handleFormSubmit={this.handleFormSubmit} 
      handleChange={this.handleChange}
      handleSelect={handleSelect}
      inputValue={inputValue} 
    />;
  }
}

const mapStateToProps = state => ({
  documents: getDocumentsList(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (title) => dispatch(addDocument(title)),
  handleSelect: (index) => dispatch(selectDocument(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlsContainer);
