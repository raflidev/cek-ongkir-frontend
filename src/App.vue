<template>
  <div id="app">
    <div class="text-white py-3 bg-red-500">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"App"
}
</script>
