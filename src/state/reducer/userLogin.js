const reducer = (
  state = {
    userId: false,
    token: false,
  },
  action
) => {
  if (action.type === "user") {
    return (state = {
      userId: action.payload.userId,
      token: action.payload.token,
    });
  } else {
    return state;
  }
};

export default reducer;
