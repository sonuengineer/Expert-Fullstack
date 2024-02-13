// authActions.js
export const loginSuccess = (username, timestamp) => ({
    type: 'LOGIN_SUCCESS',
    payload: { username, timestamp },
  });
  

  export const logout = () => ({
    type: 'LOGOUT',
  });

  // backgroundActions.js
// backgroundActions.js
export const toggleBackgroundColor = () => ({
  type: 'TOGGLE_BACKGROUND_COLOR',
});

