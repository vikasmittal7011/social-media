const reducer = (state = false, action) => {
  if (action.payload === "value") {
    return (state = action.payload.value);
  } else {
    return state;
  }
};

export default reducer;
