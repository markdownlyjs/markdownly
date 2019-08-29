import { UPDATE_MARKDOWN, ADD_DOCUMENT } from '../actions/documentActions';

const initialState = {
  currentDocument: 0,
  inputValue: '',
  list: [
    {
      title: 'default',
      markdown: '# Hello There'
    }
  ]
};

export default function reducer(state = initialState, action) {
  const updated = { title: state.list[state.currentDocument].title, markdown: action.payload };
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { 
        ...state, 
        list: [
          ...state.list.slice(0, state.currentDocument), 
          updated,
          ...state.list.slice(state.currentDocument + 1)
        ] 
      };
    case ADD_DOCUMENT:
      return {
        ...state, 
        list: [...state.list, { title: action.payload, markdown: '# Hello There' }]
      };
    default: 
      return state;
  }
}
