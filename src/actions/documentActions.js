export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const addDocument = (title) => ({
  type: ADD_DOCUMENT,
  payload: title
});

export const SELECT_DOCUMENT = 'SELECT_DOCUMENT';
export const selectDocument = index => ({
  type: SELECT_DOCUMENT,
  payload: index
});
