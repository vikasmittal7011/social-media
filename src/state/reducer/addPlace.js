const reducer = (
  state = { name: "", description: "", address: "", isValid: false },
  action
) => {
  if (action.type === "addPlace") {
    return (state = {
      name: action.payload.name,
      description: action.payload.description,
      address: action.payload.address,
      isValid: action.payload.isValid,
    }) + console.log(state);
  } else {
    return state;
  }
};

export default reducer;
