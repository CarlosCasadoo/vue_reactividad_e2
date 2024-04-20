import { ref } from 'vue';

// Crear una referencia reactiva
const myRef = ref(10);

// Acceder al valor
console.log(myRef.value); // Output: 10

// Modificar el valor
myRef.value = 20;

// Acceder al valor
console.log(myRef.value); // Output: 20