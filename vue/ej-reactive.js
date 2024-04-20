import { reactive } from 'vue'

const state = reactive({
  count: 0,
  message: 'Hello, World!'
})

// Leyendo las propiedades iniciales
console.log(state.count) // 0
console.log(state.message) // Hello, World!

// Cambiando las propiedades
  state.count += 1
  state.message = 'Hello, Vue!'

// Leyendo las propiedades modificadas
console.log(state.count) // 1
console.log(state.message) // Hello, Vue!

