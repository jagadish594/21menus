
const FoodSearchReducer = (state, action) => {
    const newState = { ... state };
    switch(action.type) {
        case "FETCH-DATA":
            newState.data = action.value;
            break;

        case "INPUT-QUERY":
            newState.inputQuery = action.value;
            break;

        case "IS-SEARCH":
            newState.isSearch = action.value;
            break;

        case "SEARCH":
            newState.isSearch = true;
            break;
            
        default: new Error();
    }
    return newState;
}

export default FoodSearchReducer;