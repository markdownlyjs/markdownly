export const getDocumentState = (state) => state.documents;
export const getCurrentDocument = state => getDocumentState(state).list[state.documents.currentDocument];
export const getMarkdown = state => getCurrentDocument(state).markdown;
export const getCurrentDocumentVal = state => state.documents.currentDocument;
