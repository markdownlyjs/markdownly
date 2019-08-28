import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getMarkDown } from '../selectors/documentSelector';
import { updateMarkdown } from '../actions/documentActions';

const mapStateToProps = state => ({
  markdown: getMarkDown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown: (markdown) => dispatch(updateMarkdown(markdown))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
