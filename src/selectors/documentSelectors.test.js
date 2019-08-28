import { getDocumentState, getMarkdown } from './documentSelector';

describe('documentSelectors', () => {
  it('gets the document state', () => {
    const state = { documents: { markdown: '# some markdown' } };

    const document = getDocumentState(state);
    expect(document).toEqual(state.documents);
  });

  it('gets the markdown', () => {
    const state = { documents: { markdown: '# some markdown' } };

    const document = getMarkdown(state);
    expect(document).toEqual('# some markdown');
  });
});
