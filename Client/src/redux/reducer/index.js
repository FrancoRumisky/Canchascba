import {
  GET_SPORTS,
  GET_USERS,
  GET_USER,
  GET_SPORT,
  GET_COMPANIES,
  GET_COMPANIESBYSPORT,
  GET_IDSPORT,
  GET_COMPANIEBYID,
  GET_FIELDSBYCS,
  GET_UBI,
  FILTER_BY_LOCATION,
  FILTER_BY_SERVICES,
  SET_DATE,
  USER_AUTH,
  PASS_STATUS,
  CHANGE_PASS
} from "../constants";

const initialState = {
  userAuth : {},
  statusPass: {},
  changePass:{},
  allusers: [],
  user: {},
  allSports: [],
  sport: {},
  idSport:"",
  companies: [],
  currentCompanies: [],
  companiesBySport: [],
  company: {},
  fieldsByCS: [],
  ubicacion: [],
  date: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
    return {
      ...state,
      userAuth:action.payload
    };
    case PASS_STATUS:
    return {
      ...state,
      statusPass:action.payload
    };
    case CHANGE_PASS:
      return {
        ...state,
        changePass:action.payload
      }
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
        loading: false,
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
        currentCompanies: action.payload,
        loading: false,
      };
      case GET_IDSPORT:
      return {
        ...state,
        idSport: action.payload,
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
      const companiesFiltered = state.currentCompanies.filter((e) =>
        action.payload.includes(e.ciudad)
      );
      return {
        ...state,
        companiesBySport: companiesFiltered,
      };
    case FILTER_BY_SERVICES:
      const servicesCompanies =  state.currentCompanies.filter(e => e.Servicios.include())
      return {
        ...state,

      }
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
