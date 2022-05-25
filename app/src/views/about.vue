<template>
  <div class="about-page">
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
      name: 'About',
    }
  }
}
</script>


<style lang="less">
.about-page {
  font-size: 20px;
}
</style>

