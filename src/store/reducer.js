const initialState = {
    age: 10
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === 'AGE_UP') {
        newState.age += action.value;
    }
    return newState;
};

export default reducer;
