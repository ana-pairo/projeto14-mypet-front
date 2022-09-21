import axios from "axios";

const BASE_URL = "https://mypet-data.herokuapp.com";

function openClientSession(body) {
  const promise = axios.post(`${BASE_URL}/signIn`, body);

  return promise;
}

function createClient(body) {
  const promise = axios.post(`${BASE_URL}/signUp`, body);

  return promise;
}

function searchProductsByName(searchData) {
  try {
    const res = axios.get(`${BASE_URL}/search/${searchData}`);
    return res;
  } catch (error) {
    return false;
  }
}
function searchProductsByType(searchData) {
  try {
    const res = axios.get(`${BASE_URL}/type/${searchData}`);
    return res;
  } catch (error) {
    return false;
  }
}
function searchAll() {
  try {
    const res = axios.get(`${BASE_URL}/search`);
    return res;
  } catch (error) {
    return false;
  }
}
function newProductAdd(body) {
  try {
    const res = axios.post(`${BASE_URL}/admin/newproduct`, body);
    return res;
  } catch (error) {
    return false;
  }
}
function sendClientDataForm(body) {
  try {
    const res = axios.post(`${BASE_URL}/checkout`, body);
    return res;
  } catch (error) {
    return false;
  }
}

async function getClientData(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.get(`${BASE_URL}/session`, config);

  return promise;
}

async function deleteSession(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.delete(`${BASE_URL}/session`, config);

  return promise;
}

export {
  openClientSession,
  createClient,
  searchProductsByName,
  newProductAdd,
  searchAll,
  searchProductsByType,
  sendClientDataForm,
  getClientData,
  deleteSession,
};
