import { createStore } from 'vuex'
import exercises from './modules/exercises'
export default createStore({
  modules: {
    exercises
  }
})
