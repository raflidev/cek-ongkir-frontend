import axios from 'axios';

async function getProvinsi() {
   const { data } = await axios.get("https://cekongkirlah.herokuapp.com/api/province")
   return data
}

async function getCity() {
   const { data } = await axios.get("https://cekongkirlah.herokuapp.com/api/city")
   return data
}

async function getCityID(id) {
   const { data } = await axios.get(`https://cekongkirlah.herokuapp.com/api/city/${id}`)
   return data
}

async function getOngkir(o, d, w, c) {
   const { data } = await axios.get(`https://cekongkirlah.herokuapp.com/api/cost/${o}/${d}/${w}/${c}`)
   return data
}

export { getProvinsi, getCity, getCityID, getOngkir }