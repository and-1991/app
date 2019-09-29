import {SET_HELLO} from "../type";

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HELLO:
            return action.payload;
        default:
            return state;
    }
}