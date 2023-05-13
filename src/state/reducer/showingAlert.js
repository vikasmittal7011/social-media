const reducer = (state = null, action) => {
  if (action.type === "showAlert") {
    return (state = action.payload);
  } else if (action.type === "removeAlert") {
    return (state = action.payload);
  } else {
    return state;
  }
};

export default reducer;
