import { GET_SPORTS, GET_USERS } from "../constants";
// import axios from "axios"
import {BACKEND_SERVER} from "@env"

const server =
  BACKEND_SERVER || "http://localhost:3001";

export function getUsers(id) {
  if (id) {
    return function (dispatch) {
      fetch(BACKEND_SERVER + `/users/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_USERS, payload: res });
        });
    };
  } else {
    return function (dispatch) {
        fetch(BACKEND_SERVER + `/users/`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_USERS, payload: res });
        });
    }
  }
}

export function getSports(){
  return function (dispatch) {
    fetch(BACKEND_SERVER + `/deportes/`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: GET_SPORTS, payload: res });
    });
}
}
