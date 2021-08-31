import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numberOfIceCreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
