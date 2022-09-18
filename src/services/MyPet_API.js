import axios from "axios";

const BASE_URL = "http://localhost:5000";

function openClientSession(body) {
  const promise = axios.post(`${BASE_URL}/signIn`, body);

  return promise;
}

function createClient(body) {
  const promise = axios.post(`${BASE_URL}/signUp`, body);

  return promise;
}

function searchProductsByName(searchData){
  try {
      const res = axios.get(`http://localhost:5000/search/${searchData}`)
      return res
  } catch (error) {
      return false
  }
}

export { openClientSession, createClient, searchProductsByName };
