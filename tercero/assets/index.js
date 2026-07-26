
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const boton = document.querySelector("#btn-ingresar");
const resultado = document.querySelector("#resultado");


boton.addEventListener("click", () => {

  const password = select1.value + select2.value + select3.value;

  if (password === "911") {

    resultado.textContent = "password 1 correcto";
  } else if (password === "714") {

    resultado.textContent = "password 2 es correcto";
  } else {

    resultado.textContent = "password incorrecto";
  }
});