// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const formCategoria = document.querySelector("form[action='#']"); // primer form, crear categoría
    const inputCategoria = document.getElementById("nueva-categoria");
    const selectGasto = document.getElementById("categoria");
    const selectPresupuesto = document.getElementById("categoria-presupuesto");
  
    formCategoria.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nueva = inputCategoria.value.trim();
      if (nueva === "") return;
  
      // Crear nueva opción
      const opcion1 = document.createElement("option");
      opcion1.value = nueva.toLowerCase().replace(/\s+/g, "-");
      opcion1.textContent = nueva;
  
      const opcion2 = opcion1.cloneNode(true);
  
      // Agregar a ambos select
      selectGasto.appendChild(opcion1);
      selectPresupuesto.appendChild(opcion2);
  
      // Limpiar input
      inputCategoria.value = "";
      alert("¡Categoría creada con éxito!");
    });
});
  