<template>
  <div>
     <div class="w-screen h-full">
            <div v-if="loading" class="absolute flex w-screen justify-center top-10">
                <div class="flex bg-gray-800 p-3 px-10 rounded-md justify-center items-center">
                    <svg class="animate-spin justify-center h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h1 class="text-white text-md">Loading</h1>
                </div>
            </div>
         <div class="absolute flex justify-center w-full h-28 mt-28">
               <h1 class="text-4xl font-bold">
                Cek Ongkir
                </h1>
         </div>
      <div class="flex w-screen h-screen">
         <div class="w-2/3">
            <div class="flex justify-center h-screen items-center space-x-7">
                <div class="flex-col space-y-7 w-1/4">
                    <div>
                        <h1 class="font-medium text-3xl">
                            Dari
                        </h1>
                    </div>
                    <div>
                        <div>
                            <label class="text-gray-400">Provinsi</label>
                        </div>
                       <select name="" class="p-2 border-b-2 border-gray-500  w-full mt-3" id=""  v-model="prov_id" @change="getCity(prov_id)">
                           <option v-for="prov in provinsi" :key="prov.index" :value="prov.province_id">{{prov.province}}</option>
                       </select>
                    </div>
                    <div>
                        <div>
                            <label class="text-gray-400">Kota/Kabupaten</label>
                        </div>
                       <select :class="{'border-gray-500':prov_id != null}"  name="" class="p-2 border-b-2 border-gray-200 w-full mt-3"  v-model="city_id" :disabled="prov_id == null">
                           <option v-for="city in city" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
                       </select>
                    </div>
                </div>
                <div class="flex-col space-y-7 w-1/2">
                    <div>
                        <h1 class="font-medium text-3xl">
                            Tujuan
                        </h1>
                    </div>
                    <div class="flex space-x-7">
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Provinsi</label>
                            </div>
                            <select name="" :class="{'border-gray-500':city_id != null}" class="p-2 border-b-2 border-gray-200 w-full mt-3" v-model="prov_to"  @change="getCityTo(prov_to)" :disabled="city_id == null">
                                <option v-for="prov_to in provinsi" :key="prov_to.index" :value="prov_to.province_id">{{prov_to.province}}</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Berat</label>
                            </div>
                            <input :class="{'border-gray-500':destination != null}" type="number" v-model="weight" class="p-2 border-b-2 border-gray-200 w-full mt-3" id="" :disabled="destination == null" />
                        </div>
                    </div>
                    <div class="flex space-x-7">
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Kota/Kabupaten</label>
                            </div>
                            <select :class="{'border-gray-500':prov_to != null}" name="" class="p-2 border-b-2 border-gray-200 w-full mt-3" id="" v-model="destination" :disabled="prov_to == null">
                                <option v-for="city in city_to" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Kurir</label>
                            </div>
                            <select name="" :class="{'border-gray-500':weight != null}" class="p-2 border-b-2 border-gray-200 w-full mt-3" v-model="courier" @change="cekOngkir(city_id,destination,weight,courier)" :disabled="weight == null">
                                <option value="jne">JNE</option>
                                <option value="tiki">TIKI</option>
                            </select>
                            
                        </div>
                    </div>
                    
                </div>          
            </div>
         </div>
         <div class="w-3/2" v-if="city_id != null && destination != null && weight != null && courier != null">
         <div class="flex justify-center h-screen items-center">
             <div class="bg-gray-100 w-96 h-1/2 rounded-md">
                 <div class="flex justify-center min-h-full items-center">
                     <div class="items-center space-y-6 w-3/4 min-h-full text-xl">
                        <div class="flex">
                            <h1 class="w-1/2 font-medium">Provinsi</h1>
                            <span class="w-1/2">{{ongkir.destination.province}}</span>
                        </div>
                        <div class="flex">
                            <h1 class="w-1/2 font-medium">Destinasi </h1>
                            <span class="w-1/2">{{ongkir.destination.city_name}}</span>
                        </div>
                        <div class="flex">
                            <h1 class="w-1/2 font-medium">Berat</h1>
                            <span class="w-1/2">{{weight}} gram</span>
                        </div>
                        <div class="flex">
                            <h1 class="w-1/2 font-medium">Kurir</h1>
                            <span class="w-1/2">{{ongkir.result[0].code.toUpperCase()}}</span>
                        </div>
                        <div class="flex" v-if="ongkir.result[0].costs != []">
                            <h1 class="w-1/2 font-medium">Total</h1>
                            <span class="w-1/2">Rp.{{ongkir.result[0].costs[0].cost[0].value}}</span>
                        </div>
                        <div v-else class="flex">
                            <h1 class="w-1/2 font-medium">Total</h1>
                            <span class="w-1/2">Data Tidak ada </span>
                        </div>
                     </div>
                 </div>
             </div>
         </div>
         </div>
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
      prov_id:null,
      city:null,
      city_id:null,

      city_to:null,

      prov_to:null,

      destination:null,
      weight:null,
      courier:null,

      ongkir:null,

      loading: false
    } 
  },
  created(){
      if (localStorage.getItem("started") == null) {
          this.$router.push("started")
      }
  },
  async mounted(){
    this.loading = true
    this.provinsi = await getProvinsi()
    this.loading = false
  },
  methods:{
    async getCity(id) {
      this.loading = true
      this.city = await getCityID(id)
      this.loading = false
    },
    async getCityTo(id) {
      this.loading = true
      this.city_to = await getCityID(id)
      this.loading = false
    },
    async cekOngkir(o,d,w,c){
        console.log(o,d,w,c);
      this.loading = true
      this.ongkir = await getOngkir(o,d,w,c)
      this.loading = false
    }
  }
}
</script>

<style>

</style>