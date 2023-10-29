document.addEventListener("DOMContentLoaded", function () {
  const toggleListButton = document.getElementById("toggleListButton");
  const listGroup = document.querySelector(".list-group");

  if (toggleListButton && listGroup) {
    // Verificar la ventana actual al cargar la página
    checkWindowWidth();

    // Verificar el tamaño de la ventana al cambiar su tamaño
    window.addEventListener("resize", checkWindowWidth);

    toggleListButton.addEventListener("click", function () {
      if (listGroup.classList.contains("d-none")) {
        listGroup.classList.remove("d-none");
      } else {
        listGroup.classList.add("d-none");
      }
    });
  }

  // Función para verificar el tamaño de la ventana y ocultar el botón en lg
  function checkWindowWidth() {
    if (window.innerWidth >= 992) {
      toggleListButton.classList.add("d-none");
      // Asegúrate de mostrar el list-group en pantallas grandes (lg)
      listGroup.classList.remove("d-none");
    } else {
      toggleListButton.classList.remove("d-none");
    }
  }
});
