import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkdown } from '../selectors/documentSelector';
import { updateMarkdown } from '../actions/documentActions';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown: ({ target }) => {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
