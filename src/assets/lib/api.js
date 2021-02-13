import axios from 'axios';

async function getApi() {
   const { data } = await axios.get("https://api.rajaongkir.com/starter/province?key=7e7dfdc38dd2361f1c1cbadaa1dd68b5")
   console.log(data);
}

export { getApi }