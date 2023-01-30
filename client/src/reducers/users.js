const userReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USER":
      return action.payload;
    case 'UPDATE_CURRENT_USER':
      console.log({ states: states })
      console.log({ data: action.payload })
      return states.map((state) => state._id === action.payload._id ? action.payload : { ...states })
    default:
      return states;
  }
}


export default userReducer;