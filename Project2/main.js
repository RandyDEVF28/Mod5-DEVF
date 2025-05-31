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
  