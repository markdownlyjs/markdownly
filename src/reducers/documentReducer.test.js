import reducer from './documentReducer';
import { updateMarkdown } from '../actions/documentActions';

describe('documentReducer', () => {
  it('returns the same state when it does not understand the action', () => {
    const state = { markdown: 'some markdown' };
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('updates the markdown state when it gets an UPDATE_MARKDOWN action', () => {
    const state = { markdown: 'some markdown' };
    const action = updateMarkdown('new markdown');

    const newState = reducer(state, action);

    expect(newState).toEqual({ markdown: 'new markdown' });
  });
});
