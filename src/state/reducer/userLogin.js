const reducer = (state = false, action) => {
  if (action.type === "user") {
    return (state = action.payload.value);
  } else {
    return state;
  }
};

export default reducer;
