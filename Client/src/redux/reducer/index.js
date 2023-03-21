import { GET_SPORTS, GET_USERS, GET_USER, GET_SPORT } from "../constants";

const initialState = {
  allusers: [],
  user:{},
  allSports: [],
  sport:{},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allusers: action.payload,
      };
      case GET_USER:
        return {
          ...state,
          user:action.payload,
        };
      case GET_SPORTS:
      return {
        ...state,
        allSports: action.payload,
      };
      case GET_SPORT:
        return {
          ...state,
          sport: action.payload,
        }
    default:
      return state;
  }
};

export default reducer;