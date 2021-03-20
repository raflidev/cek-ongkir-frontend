<template>
  <div>
     <div class="w-screen h-full bg-red-400 ">
      <div class="flex w-screen h-screen">
         <div>
         <label for="provinsi">Dari</label>
         </div>
         <select name="provinsi" id="" v-model="prov_id" @change="getCity(prov_id)">
         <option value="" selected disabled>== Select Province ==</option>
         <option v-for="prov in provinsi" :key="prov.index" :value="prov.province_id">{{prov.province}}</option>
         </select>
         <div v-if="city != null && prov_id != '0'" >        
         <select name="" id="" v-model="city_id">
            <option v-for="city in city" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
         </select>
         </div>
         <div v-else>
         <select name="" id="" disabled>
            <option value="" selected disabled>-= Select City =-</option>
         </select>
         </div>
      </div>
     
     <div class="row-span-6">
      <div v-if="city_id != null">
      <div>
         <label for="provinsi_to">Ke</label>
      </div>
      <select name="provinsi_to" id="" v-model="prov_to">
         <option v-for="prov_to in provinsi" :key="prov_to.index" :value="prov_to.province_id">{{prov_to.province}}</option>
      </select>

         <select v-if="prov_to != null" name="" id="" v-model="destination">
         <option v-for="city in city" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
      </select>
      <input type="number" v-model="weight" placeholder="weight" id="">
      <select name="" id="" v-model="courier">
         <option value="jne">JNE</option>
         <option value="tiki">TIKI</option>
      </select>
      </div>
      <button v-if="city_id != null && destination != null && weight != null && courier != null" @click="cekOngkir(city_id,destination,weight,courier)" class="p-4 bg-red-600 text-black">CEK ONGKIR</button>

      {{ ongkir }}
     </div>

     </div>
  </div>
</template>

<script>
import {getProvinsi,getCityID,getOngkir} from '@/assets/lib/api'
export default {
  name: 'Home',
  data(){
    return{
      provinsi:[],
      prov_id:{},
      city:null,
      city_id:null,

      prov_to:null,

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

<style>

</style>