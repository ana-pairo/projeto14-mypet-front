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
function searchProductsByType(searchData){
  try {
      const res = axios.get(`http://localhost:5000/type/${searchData}`)
      return res
  } catch (error) {
      return false
  }
}
function searchAll(){
  try {
      const res = axios.get(`http://localhost:5000/search`)
      return res
  } catch (error) {
      return false
  }
}
function newProductAdd(body){
  try {
      const res = axios.post(`http://localhost:5000/admin/newproduct`, body)
      return res
  } catch (error) {
      return false
  }
}

export { openClientSession, createClient, searchProductsByName, newProductAdd, searchAll, searchProductsByType};
