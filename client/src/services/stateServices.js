import axios from "axios"

 // make request to endpoint and return response.data
 // returns promise, errors are handled by consumer
function getAll() {
  return axios.get("/api/states").then(response => response.data)
}

function setVisited(stateName, visited) {
  return axios.patch(`/api/state/${stateName}`, {visited: visited}).then(response => response.data)
}

function getOne(stateName ) {
  return axios.get(`/api/states/${stateName}`).then(response => response.data)
}
export default {
  getAll,
  setVisited,
  getOne
}
