const toggleTheme = document.getElementById("toggle-theme");
const toggleThemeIcon = document.getElementById("toggle-theme__icon");
const toggleThemeText = document.getElementById("toggle-theme__text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

/*CON ESTE CÓDIGO LE CAMBIAMOS LA CLASE AL "BODY" */
toggleTheme.addEventListener("click", () => {
  /*CON TOGGLE A MODO DE INTERRUPTOR, SI TIENE LA CLASE LA QUITA, SINO LA PONE */
  document.body.classList.toggle("dark");

  if (toggleThemeIcon.src.includes("moon.svg")) {
    toggleThemeIcon.src = "./icons/sun.svg";
    toggleThemeText.textContent = "Modo Claro";
  } else {
    toggleThemeIcon.src = "./icons/moon.svg";
    toggleThemeText.textContent = "Modo Oscuro";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

/*CÓDIGO PARA HACER LA VENTANA MODAL*/
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open-modal");
  }
});
