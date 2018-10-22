const DEFAULT_STATE = {
  face: '┐( ˘_˘ )┌	'
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'happy':
      return { ...state, face: action.payload };
    case 'sad':
      return { ...state, face: action.payload };    
    case 'angry':
      return { ...state, face: action.payload };
    case 'confused':
      return { ...state, face: action.payload };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer)
const face = document.getElementById('face')
face.textContent = store.getState().face

document.getElementById('happy').addEventListener('click', e => {
  store.dispatch({ type: 'happy', payload: '٩(◕‿◕｡)۶' });
  face.textContent = store.getState().face
});

document.getElementById('sad').addEventListener('click', e => {
  store.dispatch({ type: 'sad', payload: '(ಥ﹏ಥ)' });
  face.textContent = store.getState().face
});
document.getElementById('angry').addEventListener('click', e => {
  store.dispatch({ type: 'angry', payload: '٩(ఠ益ఠ)۶' });
  face.textContent = store.getState().face
});
document.getElementById('confused').addEventListener('click', e => {
  store.dispatch({ type: 'confused', payload: 'ლ(ಠ_ಠ ლ)' });
  face.textContent = store.getState().face
});
