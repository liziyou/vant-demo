import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    currentBar: localStorage.getItem('currentBar') || {}
  },
  getter: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done)
    },
    getCurrentBar: (state) => {
      return state.currentBar
    }
  },
  mutations: {
    increment(state, payload) {
      state.count++
    },
    setCurrentBar(state, value) {
      localStorage.setItem('currentBar', value)
      state.currentBar = value
    }
  },
  actions: {
    addCount(context) {
    // 可以包含异步操作
    // context 是一个与 store 实例具有相同方法和属性的 context 对象
    }
  }
})
export default store
