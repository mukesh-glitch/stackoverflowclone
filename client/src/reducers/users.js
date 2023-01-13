const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USER":
      return action.payload;
    default:
      return state;
  }
}


export default userReducer;