import { GET_SPORTS, GET_USERS } from "../constants";

const initialState = {
  users: [],
  sports: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;