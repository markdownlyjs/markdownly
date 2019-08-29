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
