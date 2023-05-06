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
