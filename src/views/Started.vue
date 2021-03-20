<template>
  <div>
      <section class="w-screen h-screen">
          <div class="flex">
              <div class=" w-1/2 h-screen">
              <div class="flex h-screen items-center px-10">
                  <div>
                    <h1 class="font-bold text-4xl">
                        Mau beli barang melalui online tapi bingung ongkos kirimnya?  
                    </h1>
                    <h2 class="font-medium text-2xl mt-4">
                        Cek harga di wilayahmu sekarang!
                    </h2>
                    <button class="uppercase bg-blue-600 text-white hover:bg-blue-400 hover:text-black rounded px-10 mt-4 py-2">
                      <router-link to="/">
                      cek
                      </router-link>
                    </button>
                  </div>
              </div>

              </div>
              <div class=" w-1/2 h-screen bg-gray-200">
              <div class="flex justify-center items-center">
                <img class="bg-contain" src="/assets/delivery.png" alt="" srcset="">
              </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>