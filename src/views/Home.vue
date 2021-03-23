<template>
  <div>
     <div class="w-screen h-full">
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
                       <select name="" class="p-2 border-b-2 border-gray-200 w-full mt-3" id=""  v-model="prov_id" @change="getCity(prov_id)">
                           <option v-for="prov in provinsi" :key="prov.index" :value="prov.province_id">{{prov.province}}</option>
                       </select>
                    </div>
                    <div>
                        <div>
                            <label class="text-gray-400">Kota/Kabupaten</label>
                        </div>
                       <select name="" class="p-2 appearance-none border-b-2 border-gray-200 w-full mt-3"  v-model="city_id">
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
                            <select name="" class="p-2 appearance-none border-b-2 border-gray-200 w-full mt-3" v-model="prov_to"  @change="getCityTo(prov_to)">
                                <option v-for="prov_to in provinsi" :key="prov_to.index" :value="prov_to.province_id">{{prov_to.province}}</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Berat</label>
                            </div>
                            <input type="number" v-model="weight" class="p-2 appearance-none border-b-2 border-gray-200 w-full mt-3" id=""/>
                        </div>
                    </div>
                    <div class="flex space-x-7">
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Kota/Kabupaten</label>
                            </div>
                            <select name="" class="p-2 appearance-none border-b-2 border-gray-200 w-full mt-3" id="" v-model="destination">
                                <option v-for="city in city_to" :key="city.index" :value="city.city_id">{{city.type +' '+city.city_name}}</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <div>
                                <label class="text-gray-400">Kurir</label>
                            </div>
                            <select name="" class="p-2 appearance-none border-b-2 border-gray-200 w-full mt-3" v-model="courier" @change="cekOngkir(city_id,destination,weight,courier)">
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
                        <div class="flex">
                            <h1 class="w-1/2 font-medium">Total</h1>
                            <span class="w-1/2">Rp.{{ongkir.result[0].costs[0].cost[0].value}}</span>
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
      prov_id:{},
      city:null,
      city_id:null,

      city_to:null,

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
    async getCityTo(id) {
      this.city_to = await getCityID(id)
    },
    async cekOngkir(o,d,w,c){
      this.ongkir = await getOngkir(o,d,w,c)
    }
  }
}
</script>

<style>

</style>