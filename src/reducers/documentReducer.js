import { UPDATE_MARKDOWN, ADD_DOCUMENT, SELECT_DOCUMENT } from '../actions/documentActions';

const initialState = {
  currentDocument: 0,
  list: [
    {
      title: 'default',
      markdown: '# Hello There'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { 
        ...state, 
        list: [
          ...state.list.slice(0, state.currentDocument), 
          { title: state.list[state.currentDocument].title, markdown: action.payload },
          ...state.list.slice(state.currentDocument + 1)
        ] 
      };
    case ADD_DOCUMENT:
      return {
        ...state, 
        list: [...state.list, { title: action.payload, markdown: '# Hello There' }]
      };
    case SELECT_DOCUMENT: 
      return { ...state, currentDocument: action.payload };
    default: 
      return state;
  }
}
