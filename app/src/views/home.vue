<template>
  <div class="home-page">
    <div>{{ name }} Page</div>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Home',
    }
  }
}
</script>


<style lang="less">
.home-page {
  font-size: 20px;
}
</style>

