const reducer = (state = false, action) => {
  if (action.type === "setLoading") {
    return (state = action.payload.loading);
  } else {
    return state;
  }
};

export default reducer;
