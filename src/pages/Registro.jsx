import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      contraseña.trim() === "" ||
      confirmar.trim() === ""
    ) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    if (contraseña !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Simulación de registro exitoso
    alert("Cuenta creada con éxito 🎉");
    navigate("/login");
  };

  return (
    <main className="form-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label htmlFor="contraseña">Contraseña</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />

        <label htmlFor="confirmar">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmar"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />

        <button type="submit" className="btn">Registrarse</button>
      </form>
      <p>¿Ya tenés una cuenta? <a href="/login">Iniciar sesión</a></p>
    </main>
  );
}

export default Registro;
