// backgroundReducer.js
const initialState = {
  backgroundColor: 'blue',
  toggleColor: false, // Add a flag to toggle between colors
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BACKGROUND_COLOR':
      return {
        ...state,
        toggleColor: !state.toggleColor, // Toggle the flag
        backgroundColor: state.toggleColor ? 'blue' : 'red', // Set your colors here
      };
    default:
      return state;
  }
};

export default backgroundReducer;
