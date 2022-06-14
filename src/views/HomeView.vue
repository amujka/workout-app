<template>
  <div class="home">
   
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {

  },
  methods: {
    ...mapActions('exercises',['fetchExercisesAction'])
  },
  async mounted () {
    await this.fetchExercisesAction()
  }
  
}
</script>
