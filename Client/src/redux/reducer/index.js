import {
  GET_SPORTS,
  GET_USERS,
  GET_USER,
  GET_SPORT,
  GET_COMPANIES,
  GET_COMPANIESBYSPORT,
  GET_COMPANIEBYID,
  GET_FIELDSBYCS,
  GET_UBI,
  FILTER_BY_LOCATION,
} from "../constants";

const initialState = {
  allusers: [],
  user: {},
  allSports: [],
  sport: {},
  companies:[],
  companiesBySport: [],
  company: {},
  fieldsByCS: [],
  ubicacion: [],
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
        user: action.payload,
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
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_COMPANIESBYSPORT:
      return {
        ...state,
        companiesBySport: action.payload,
      };
    case GET_COMPANIEBYID:
      return {
        ...state,
        company: action.payload,
      };
    case GET_FIELDSBYCS:
      return {
        ...state,
        fieldsByCS: action.payload,
      };
    case GET_UBI:
      return {
        ...state,
        ubicacion: action.payload,
      };
    case FILTER_BY_LOCATION:
      const companiesFiltered = state.companiesBySport.filter(e=> action.payload.includes(e.ciudad));
      return {
        ...state,
        companiesBySport: companiesFiltered,
      };
    default:
      return state;
  }
};

export default reducer;
