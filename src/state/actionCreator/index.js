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

export const addPlace = (name, description, address, isValid) => {
  return (dispatch) => {
    dispatch({
      type: "addPlace",
      payload: {
        name: name,
        description: description,
        address: address,
        isValid: isValid,
      },
    });
  };
};