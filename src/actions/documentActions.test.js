import { UPDATE_MARKDOWN, updateMarkdown } from './documentActions';

describe('documentActions', () => {
  it('returns an update markdown action', () => {
    const action = updateMarkdown('new markdown');
    
    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'new markdown'
    });
  });
});
