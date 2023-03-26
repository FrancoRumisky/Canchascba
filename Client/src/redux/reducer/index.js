import { GET_SPORTS, GET_USERS, GET_USER, GET_SPORT,GET_COMPANIESBYSPORT, GET_COMPANIEBYID, GET_FIELDSBYCS } from "../constants";

const initialState = {
  allusers: [],
  user:{},
  allSports: [],
  sport:{},
  companiesBySport:[],
  company:{},
  fieldsByCS:[],
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
        };
        case GET_COMPANIESBYSPORT:
          return {
            ...state,
            companiesBySport:action.payload,
          }
          case GET_COMPANIEBYID:
            return {
              ...state,
              company:action.payload,
            }
          case GET_FIELDSBYCS:
            return {
              ...state,
              fieldsByCS: action.payload,
            }
    default:
      return state;
  }
};

export default reducer;