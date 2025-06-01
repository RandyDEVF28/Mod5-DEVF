let biblioteca = {
    libros: [
      {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        disponible: true
      },
      {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopía",
        disponible: false
      }
    ]
  };
  
  //Funcion para simular lectura de datos con callback y retraso 
  function leerInventario(callback) {
    setTimeout(() => {
      console.log("Leyendo inventario...");
      callback(biblioteca);
    }, 1000); // 1 segundo de retraso
  }

  //Funciones para interactuar con el inventario
  
  //Agregar Libro
  function agregarLibro(nuevoLibro, callback) {
    setTimeout(() => {
      biblioteca.libros.push(nuevoLibro);
      console.log(`Libro "${nuevoLibro.titulo}" agregado.`);
      callback();
    }, 1000);
  }

  //Actualizar Disponibilidad
  function actualizarDisponibilidad(titulo, disponible, callback) {
    setTimeout(() => {
      const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
      if (libro) {
        libro.disponible = disponible;
        console.log(`Disponibilidad de "${titulo}" actualizada a ${disponible ? "disponible" : "prestado"}.`);
      } else {
        console.log(`Libro "${titulo}" no encontrado.`);
      }
      callback();
    }, 1000);
  }

  //Consultar Inventario
  function mostrarInventario() {
    console.log("\n📚 Inventario Actual:");
    biblioteca.libros.forEach(libro => {
      console.log(`${libro.titulo} - ${libro.autor} (${libro.genero}) - ${libro.disponible ? "Disponible" : "Prestado"}`);
    });
  }
  
  //Ejemplo de Uso 
  leerInventario((data) => {
    mostrarInventario();
  
    const nuevoLibro = {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      genero: "Ficción",
      disponible: true
    };
  
    agregarLibro(nuevoLibro, () => {
      actualizarDisponibilidad("1984", true, () => {
        mostrarInventario();
      });
    });
  });
  
  
  