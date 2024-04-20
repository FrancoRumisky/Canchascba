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
  FILTER_BY_SERVICES,
  SET_DATE,
  GET_IDSPORT,
  USER_AUTH,
  PASS_STATUS,
  CHANGE_PASS
} from "../constants";

import { BACKEND_SERVER } from "@env";

const server = BACKEND_SERVER || "https://canchascba-dev-etpm.1.us-1.fl0.io";

export function login(data) {
  return function (dispatch) {
    fetch(server + `/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((req) => req.json())
      .then((res) => dispatch({ type: USER_AUTH, payload: res }));
  };
}

export function forgotPassword(data) {
  return function (dispatch) {
    fetch(server + `/login/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: PASS_STATUS, payload: res }));
  };
}

export function chagePassword({ newPassword, token }) {
  console.log(newPassword, token);
  return function (dispatch) {
    fetch(server + `/login/new-password`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        mode: 'no-cors',
      },
      body: JSON.stringify({ newPassword: newPassword }),
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: CHANGE_PASS, payload: res }));
  };
}

export function getUsers(id) {
  if (id) {
    return function (dispatch) {
      fetch(server + `/users/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_USER, payload: res });
        });
    };
  } else {
    return function (dispatch) {
      fetch(server + `/users/`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_USERS, payload: res });
        });
    };
  }
}

export function getOneSport(id) {
  if (id) {
    return function (dispatch) {
      fetch(server + `/deportes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_SPORT, payload: res });
        });
    };
  }
}

export function getSports() {
  return function (dispatch) {
    dispatch(loading());
    fetch(server + `/deportes/`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_SPORTS, payload: res });
      });
  };
}

export function getCompanies() {
  return function (dispatch) {
    fetch(server + `/empresas`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_COMPANIES, payload: res });
      });
  };
}

export function getCompaniesBySport(id) {
  return function (dispatch) {
    dispatch(loading());
    fetch(server + `/empresas?idsport=${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_COMPANIESBYSPORT, payload: res });
      });
  };
}

export function getCompanieById(id) {
  return function (dispatch) {
    fetch(server + `/empresas/${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_COMPANIEBYID, payload: res });
      });
  };
}

export function getFieldsByCompanyAndSport(
  idcompany,
  idsport,
  fecha,
  horaInicio,
  horaFin
) {
  return function (dispatch) {
    fetch(
      server +
        `/canchas?idcompany=${idcompany}&idsport=${idsport}&fecha=${fecha}&horaInicio=${horaInicio}&horaFin=${horaFin}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_FIELDSBYCS, payload: res });
      });
  };
}

export function getLocation() {
  return function (dispatch) {
    fetch(server + "/empresas/ubicacion")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_UBI, payload: res });
      });
  };
}

export function setFilters(props) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_LOCATION, payload: props });
  };
}

export function servicesFilters(props) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_SERVICES, payload: props });
  };
}

export function setDate(props) {
  return function (dispatch) {
    dispatch({ type: SET_DATE, payload: props });
  };
}

export function getIdSport(id) {
  return function (dispatch) {
    dispatch({ type: GET_IDSPORT, payload: id });
  };
}

export function loading() {
  return { type: "LOADING" };
}
