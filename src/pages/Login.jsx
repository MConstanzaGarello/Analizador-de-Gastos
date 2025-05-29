import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correo.trim() === "" || contraseña.trim() === "") {
      alert("Por favor, completá todos los campos.");
      return;
    }

    // Simulación de login exitoso (sin base de datos aún)
    navigate("/panel");
  };

  return (
    <main className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn">Entrar</button>
      </form>
      <p>¿No tenés cuenta? <a href="/registro">Crear una cuenta</a></p>
    </main>
  );
}

export default Login;
