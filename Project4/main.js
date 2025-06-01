let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("✅ Mesas disponibles.");
      } else {
        reject("❌ No hay suficientes mesas disponibles.");
      }
    }, 1000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.8;
      if (exito) {
        resolve(`📧 Correo enviado a ${nombreCliente}.`);
      } else {
        reject("❌ Error al enviar el correo de confirmación.");
      }
    }, 1000);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  const log = document.getElementById("log");
  log.innerHTML = `\nProcesando reserva para <strong>${nombreCliente}</strong>...`;
  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    log.innerHTML += `<br>${disponibilidad}`;

    mesasDisponibles -= mesasSolicitadas;
    log.innerHTML += `<br>✅ Reserva confirmada. Mesas restantes: ${mesasDisponibles}`;

    const correo = await enviarConfirmacionReserva(nombreCliente);
    log.innerHTML += `<br>${correo}`;
    log.innerHTML += `<br><strong>🎉 Reserva completada con éxito.</strong>`;
  } catch (error) {
    log.innerHTML += `<br><strong>${error}</strong>`;
  }
}

function hacerReservaUI() {
  const nombre = document.getElementById("nombre").value.trim();
  const mesas = parseInt(document.getElementById("mesas").value);
  const log = document.getElementById("log");

  if (!nombre || isNaN(mesas) || mesas <= 0) {
    log.innerHTML = "⚠️ Por favor ingresa un nombre válido y una cantidad de mesas mayor a 0.";
    return;
  }

  hacerReserva(nombre, mesas);
}
