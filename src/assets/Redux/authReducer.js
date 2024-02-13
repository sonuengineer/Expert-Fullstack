// authReducer.js
const initialState = {
  username: null,
  lastLogin: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: action.payload.username,
        lastLogin: {
          username: action.payload.username,
          timestamp: action.payload.timestamp,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        username: null,
        lastLogin: null,
      };
    default:
      return state;
  }
};

export default authReducer;
