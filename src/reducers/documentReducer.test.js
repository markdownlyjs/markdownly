import reducer from './documentReducer';
import { updateMarkdown, addDocument, selectDocument } from '../actions/documentActions';

describe('documentReducer', () => {
  it('returns the same state when it does not understand the action', () => {
    const state = { currentDocument: 0, list: [{ title: 'some title', markdown: 'some markdown' }] };
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('updates the markdown state when it gets an UPDATE_MARKDOWN action', () => {
    const state = { currentDocument: 0, list: [{ title: 'some title', markdown: 'some markdown' }] };
    const action = updateMarkdown('new markdown');

    const newState = reducer(state, action);

    expect(newState).toEqual({ currentDocument: 0, list: [{ title: 'some title', markdown: 'new markdown' }] });
  });

  it('adds a document to the list when it gets a ADD_DOCUMENT action', () => {
    const state = { currentDocument: 0, list: [{ title: 'some title', markdown: 'some markdown' }] };
    const action = addDocument('My New Document');

    const newState = reducer(state, action);
    expect(newState).toEqual({ 
      currentDocument: 0, 
      list: [
        { title: 'some title', markdown: 'some markdown' },
        { title: 'My New Document', markdown: '# Hello There' }
      ] 
    });
  });

  it('it updates currentDocument index on SELECT_DOCUMENT action', () => {
    const state = { currentDocument: 0, list: [
      { title: 'some title', markdown: 'some markdown' },
      { title: 'My New Document', markdown: '# Hello There' }
    ] };
    const action = selectDocument(1);

    const newState = reducer(state, action);
    expect(newState).toEqual({ 
      currentDocument: 1, 
      list: [
        { title: 'some title', markdown: 'some markdown' },
        { title: 'My New Document', markdown: '# Hello There' }
      ]
    });
  });
});
