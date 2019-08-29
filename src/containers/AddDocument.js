import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DocumentForm from '../components/controls/DocumentForm';
import { addDocument } from '../actions/documentActions';

class AddDocument extends React.Component {
  static propTypes ={
    handleSubmit: PropTypes.func.isRequired
  };

  state = {
    inputValue: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { handleSubmit } = this.props;
    return <DocumentForm inputValue={inputValue} handleChange={this.handleChange} handleSubmit={handleSubmit}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e, title) => {
    e.preventDefault();
    dispatch(addDocument(title));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddDocument);
