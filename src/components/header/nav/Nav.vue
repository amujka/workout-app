<template>
  <template v-if="screen === 'mobile'">
    <button class="menu_btn" @click="openNav = !openNav">
      {{ openNav ? 'close' : 'menu' }}
    </button>
    <Transition name="slide">
      <ul v-if="openNav" class="nav" :class="screen">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/exercises">Exercises</router-link></li>
      </ul>
    </Transition>
  </template>
  <template v-else>
    <ul class="nav" :class="screen">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/exercises">Exercises</router-link></li>
    </ul>
  </template>
</template>

<script>
export default {
  name: 'header-nav',
  props: {
    screen: {
      required: true,
    },
  },
  data() {
    return {
      openNav: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.openNav = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu_btn {
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  text-decoration: underline;
}
.nav {
  display: flex;

  li {
    width: 100%;
    margin: 2rem 0;

    @media screen and (min-width: 768px) {
      margin: 0px 10px;
    }

    a {
      color: #fff;
      font-size: 1.5rem;

      @media screen and (min-width: 768px) {
        font-size: 1.1rem;
      }
    }
    .router-link-active {
      text-decoration: underline greenyellow;
    }
  }
}

.desktop {
  flex-direction: row;
}

.mobile {
  position: absolute;
  top: 77px;
  left: 0%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: calc(100vh - 77px);
  width: 100%;
  background-color: #303030;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  left: -100%;
}
.slide-enter-to {
  left: 0%;
}
.slide-leave-to {
  left: -100%;
}
</style>
