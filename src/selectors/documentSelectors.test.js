import { getDocumentState, getMarkdown, getCurrentDocument, getCurrentDocumentVal } from './documentSelector';

describe('documentSelectors', () => {

  it('gets the document state', () => {
    const state = { documents: { currentDocument: 0, list: [{ title: 'some title', markdown: '# some markdown' }] } };

    const document = getDocumentState(state);
    expect(document).toEqual({ currentDocument: 0, list: [{ title: 'some title', markdown: '# some markdown' }] });
  });

  it('gets the current document object', () => {
    const state = { documents: { currentDocument: 0, list: [{ title: 'some title', markdown: '# some markdown' }] } };

    const document = getCurrentDocument(state);
    expect(document).toEqual({ title: 'some title', markdown: '# some markdown' });
  });

  it('gets the markdown of the current document', () => {
    const state = { documents: { currentDocument: 0, list: [{ title: 'some title', markdown: '# some markdown' }] } };

    const document = getMarkdown(state);
    expect(document).toEqual('# some markdown');
  });

  it('gets the markdown of the current document', () => {
    const state = { documents: { currentDocument: 0, list: [{ title: 'some title', markdown: '# some markdown' }] } };

    const document = getCurrentDocumentVal(state);
    expect(document).toEqual(0);
  });
});
