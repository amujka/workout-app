<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <h1>GymForYou</h1>
      </div>
      <header-nav v-if="windowWidth < 768" screen="mobile" />
      <header-nav v-else screen="desktop" />
    </div>
  </header>
</template>

<script>
import Nav from './nav/Nav.vue';
export default {
  name: 'header-app',
  components: {
    'header-nav': Nav,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #303030;
  color: #fff;
  box-shadow: 0 1px 5px #404040;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    text-decoration: underline greenyellow;
  }
}
</style>
