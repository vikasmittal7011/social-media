export const activateAlert = (message, type) => {
  return (dispatch) => {
    dispatch({
      type: "showAlert",
      payload: {
        message: message,
        type: type,
      },
    });
  };
};

export const removeAlert = () => {
  return (dispatch) => {
    dispatch({
      type: "removeAlert",
      payload: null,
    });
  };
};

export const updateUserLogin = (userId, token) => {
  return (dispatch) => {
    dispatch({
      type: "user",
      payload: {
        userId: userId,
        token: token,
      },
    });
  };
};
