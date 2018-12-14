
export function loadingReducers(state = {
    counter: 0,
    loading: false
}, action) {

    var newCounter;
    switch (action.type) {
        case "ADD_LOAD": {
            newCounter = state.counter + 1;
            return {
                counter: newCounter,
                loading: (newCounter > 0)
            };
        }
        case "REMOVE_LOAD": {
            newCounter = (state.counter > 0 ? state.counter - 1 : 0);
            return {
                counter: newCounter,
                loading: (newCounter > 0)
            };
        }
        default: {
            return state;
        }
    }

}
