import { ref, computed, watch } from 'vue';

const count = ref(0);

// Definir una computación basada en el recuento
const doubleCount = computed(() => count.value * 2);

// Observar cambios en el recuento
watch(count, (newValue, oldValue) => {
  console.log(`El contador cambió de ${oldValue} a ${newValue}`);
});

// Incrementar el contador cada segundo
setInterval(() => {
  count.value++;
}, 1000);