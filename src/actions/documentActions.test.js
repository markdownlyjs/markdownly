import { UPDATE_MARKDOWN, updateMarkdown, addDocument, ADD_DOCUMENT } from './documentActions';

describe('documentActions', () => {
  it('returns an update markdown action', () => {
    const action = updateMarkdown('new markdown');
    
    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'new markdown'
    });
  });

  it('returns an add document action', () =>{
    const action = addDocument('title');

    expect(action).toEqual({
      type: ADD_DOCUMENT,
      payload: 'title'
    });
  });
});
