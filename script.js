document.addEventListener("DOMContentLoaded", function () {
  fetch("/data/ejercicios.json") // Reemplaza "tu-archivo.json" con el nombre de tu archivo JSON
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes trabajar con los datos JSON
      const jsonData = JSON.stringify(data, null, 2); // Convierte el JSON a una cadena formateada
      document.getElementById("json-data").textContent = jsonData;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
});
