import { GET_SPORTS, GET_USERS, GET_USER, GET_SPORT, GET_COMPANIESBYSPORT, GET_COMPANIEBYID, GET_FIELDSBYCS } from "../constants";
// import axios from "axios"
import { BACKEND_SERVER } from "@env";

const server = BACKEND_SERVER || "http://localhost:3001";

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
      fetch(server + `/deportes/`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_SPORTS, payload: res });
        });
    };
}

export function getCompaniesBySport(id){
  return function (dispatch) {
    fetch(server + `/empresas?idsport=${id}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: GET_COMPANIESBYSPORT, payload: res });
    });
};
}

export function getCompanieById(id){
  return function (dispatch) {
    fetch(server + `/empresas/${id}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: GET_COMPANIEBYID, payload: res });
    });
};
}

export function getFieldsByCompanyAndSport(idcompany, idsport){
  return function(dispatch){
    fetch(server + `/canchas?idcompany=${idcompany}&idsport=${idsport}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: GET_FIELDSBYCS, payload: res });
    });
};
}
