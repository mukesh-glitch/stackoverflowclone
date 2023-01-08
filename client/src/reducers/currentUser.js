const currentUserReducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_USER":
            return action.payload;
            break;

        default:
            return state
    }
}

export default currentUserReducer;