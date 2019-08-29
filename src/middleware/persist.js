export const persist = ({ getState }) => next => action => {
  const result = next(action);
  localStorage.setItem('applicationState', JSON.stringify(getState()));
  return result;
};

export const initState = () => {
  if(localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  }
};
