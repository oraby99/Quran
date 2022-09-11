const axios = require('axios')
const api = axios.create({
  baseURL: "https://api.alquran.cloud/v1",
  withCredentials: true,
});
async function http(url, options) {
  return api(url, options)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err?.response?.data?.message ?? "error"));
}
module.exports = {http}