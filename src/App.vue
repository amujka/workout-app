<template>
<header-app/>
  <router-view/>
</template>

<script>
import Header from './components/header/Header.vue'
export default {
  components: {'header-app' : Header}
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style-type: none;
        text-decoration: none;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

    }

    .container {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
</style>
