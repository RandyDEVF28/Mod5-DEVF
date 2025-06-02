const { z } = window.Zod;

// Definir el esquema de validación
const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio."),
  email: z.string().email("El correo no es válido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  };

  const errorDisplay = document.getElementById("errors");

  try {
    registerSchema.parse(formData);
    errorDisplay.textContent = "";
    alert("¡Registro exitoso!");
  } catch (error) {
    if (error.errors) {
      errorDisplay.textContent = error.errors.map(e => e.message).join(", ");
    } else {
      errorDisplay.textContent = "Ocurrió un error inesperado.";
    }
  }
});
