import { GET_SPORTS, GET_USERS, GET_USER, GET_SPORT } from "../constants";
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

export function getSports(id) {
  if (id) {
    return function (dispatch) {
      fetch(server + `/deportes/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_SPORT, payload: res });
        });
    };
  } else {
    return function (dispatch) {
      fetch(server + `/deportes/`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_SPORTS, payload: res });
        });
    };
  }
}
