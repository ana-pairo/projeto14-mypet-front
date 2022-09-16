import axios from "axios";

const BASE_URL = "http://localhost:5000";

function openClientSession(body) {
  const promise = axios.post(`${BASE_URL}/sessions`, body);

  return promise;
}

function createClient(body) {
  const promise = axios.post(`${BASE_URL}/signUp`, body);

  return promise;
}

export { openClientSession, createClient };
