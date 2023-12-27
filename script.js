function mostrarAreaRestringida() {
    const password = prompt("Introduce la contraseña:");
    const areaRestringida = document.getElementById("area-restringida");
    const bienvenida = document.querySelector(".main");
  
    // Cambia la contraseña según tus preferencias
    const contraseñaCorrecta = "503";
  
    if (password === contraseñaCorrecta) {
      areaRestringida.style.display = "block";
      bienvenida.style.display = "none"; // Oculta el contenido de bienvenida
    } else {
      alert("Contraseña incorrecta. Acceso denegado.");
    }
  }
  