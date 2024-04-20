<script>
	// Declaración de variables reactivas
	let count = 0;
	let message = 'Hello';
  
	// Función para incrementar el contador
	function increment() {
	  count++;
	}
  </script>
  
  <!-- Interfaz de usuario -->
  <div>
	<p>{message}: {count}</p>
	<button on:click={increment}>Incrementar</button>
  </div>
  