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

  handleFormSubmit = (e, title) => {
    e.preventDefault();
    this.props.handleSubmit(title);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return <DocumentForm inputValue={inputValue} handleChange={this.handleChange} handleSubmit={this.handleFormSubmit}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (title) => dispatch(addDocument(title))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDocument);
