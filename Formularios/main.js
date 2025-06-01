document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const telefono = form.telefono.value.trim();
    const intereses = [...form.querySelectorAll("input[name='intereses']:checked")].map(el => el.value);
    const horario = form.horario.value;
    const fecha = form.fecha.value;
    const archivo = form.identificacion.files[0];
  
    const errores = [];
    if (nombre.length < 3) errores.push("Nombre muy corto (mínimo 3 caracteres).”);
    if (!email.includes("@")) errores.push("Correo inválido.");
    if (telefono.length !== 10 || !/^[0-9]+$/.test(telefono)) errores.push("Teléfono inválido (deben ser 10 dígitos).”);
  
    if (errores.length > 0) {
      document.getElementById("resultado").innerHTML = errores.map(e => `❌ ${e}`).join("<br>");
      return;
    }
  
    const mensaje = `✅ Registro exitoso:<br>
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Teléfono:</strong> ${telefono}<br>
    <strong>Intereses:</strong> ${intereses.join(", ")}<br>
    <strong>Horario:</strong> ${horario}<br>
    <strong>Fecha:</strong> ${fecha}<br>
    <strong>ID Subida:</strong> ${archivo ? archivo.name : "No enviada"}`;
  
    document.getElementById("resultado").innerHTML = mensaje;
    form.reset();
  });
  