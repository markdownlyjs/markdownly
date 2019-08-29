export const getDocumentState = state => state.documents;
export const getDocumentsList = state => state.documents.list;
export const getCurrentDocument = state => getDocumentsList(state)[state.documents.currentDocument];
export const getMarkdown = state => getCurrentDocument(state).markdown;
export const getCurrentDocumentIndex = state => state.documents.currentDocument;
