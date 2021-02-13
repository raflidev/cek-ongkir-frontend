<template>
  <div id="app">
    <div class=" text-gray-800 flex justify-center my-3">
      <button class="bg-blue-400 rounded p-3">Test Tailwindcss</button>
    </div>
      <select name="" id="" v-model="prov_id" @change="getCity(prov_id)">
        <option v-for="prov in provinsi" :key="prov.index" :value="prov.province_id">{{prov.province}}</option>
      </select>
      <div v-if="city != null" >        
        <select name="" id="" v-model="city_id">
          <option v-for="city in city" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
        </select>
      </div>
      <div v-if="city_id != null">
        <input type="text" v-model="destination" placeholder="destination" id="">
        <input type="number" v-model="weight" placeholder="weight" id="">
        <select name="" id="" v-model="courier">
          <option value="jne">JNE</option>
          <option value="tiki">TIKI</option>
        </select>
      </div>
      <div v-if="city_id != null && destination != null && weight != null && courier != null" @click="cekOngkir(city_id,destination,weight,courier)" class="p-4 bg-red-600 text-black">CEK ONGKIR</div>

      {{ ongkir }}
  </div>
</template>

<script>
import {getProvinsi,getCityID,getOngkir} from '@/assets/lib/api'
export default {
  name: 'App',
  data(){
    return{
      provinsi:[],
      prov_id:{},
      city:null,
      city_id:null,

      destination:null,
      weight:null,
      courier:null,

      ongkir:null
    } 
  },
  async mounted(){
    this.provinsi = await getProvinsi()
  },
  methods:{
    async getCity(id) {
      this.city = await getCityID(id)
    },
    async cekOngkir(o,d,w,c){
      this.ongkir = await getOngkir(o,d,w,c)
    }
  }
}
</script>
