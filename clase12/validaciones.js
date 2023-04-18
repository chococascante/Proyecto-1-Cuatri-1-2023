let nombre;
let apellido;
let email;
let password;
let password2;
let fechaNacimiento;
let aceptaTerminos;

var regexCorreo =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.onload = function () {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", enviarFormulario);
};

function enviarFormulario(evento) {
  evento.preventDefault();
  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  email = document.getElementById("email");
  password = document.getElementById("password");
  password2 = document.getElementById("password2");
  fechaNacimiento = document.getElementById("fecha");
  aceptaTerminos = document.getElementById("terminos");

  // Validación nombre
  if (nombre.value === "") {
    const helperNombre = document.getElementById("helper-nombre");
    helperNombre.innerHTML = "El nombre es obligatorio";
  } else {
    const helperNombre = document.getElementById("helper-nombre");
    // helperNombre.innerHTML = "";
    if (helperNombre.innerHTML !== "") {
      helperNombre.innerHTML = "";
    }
  }

  // Validación apellido
  if (apellido.value === "") {
    const helperApellido = document.getElementById("helper-apellido");
    helperApellido.innerHTML = "El apellido es obligatorio";
  } else {
    const helperApellido = document.getElementById("helper-apellido");
    // helperApellido.innerHTML = "";
    if (helperApellido.innerHTML !== "") {
      helperApellido.innerHTML = "";
    }
  }

  // Validación email
  if (!email.value.match(regexCorreo)) {
    const helperEmail = document.getElementById("helper-email");
    helperEmail.innerHTML = "El email es obligatorio";
  } else {
    const helperEmail = document.getElementById("helper-email");
    // helperEmail.innerHTML = "";
    if (helperEmail.innerHTML !== "") {
      helperEmail.innerHTML = "";
    }
  }

  // Validación password
  if (password.value.length < 8) {
    const helperPassword = document.getElementById("helper-password");
    helperPassword.innerHTML = "La contraseña es obligatoria";
    helperPassword.classList.add("error");
  } else {
    const helperPassword = document.getElementById("helper-password");
    // helperPassword.innerHTML = "";
    if (helperPassword.innerHTML !== "") {
      helperPassword.innerHTML = "";
      helperPassword.classList.remove("error");
    }
  }

  // Validación password2
  if (password2.value !== password.value || password.value.length < 8) {
    const helperPassword2 = document.getElementById("helper-password2");
    helperPassword2.innerHTML = "Las contraseñas no coinciden";
    helperPassword2.classList.add("error");
  } else {
    const helperPassword2 = document.getElementById("helper-password2");
    // helperPassword2.innerHTML = "";
    if (helperPassword2.innerHTML !== "") {
      helperPassword2.innerHTML = "";
      helperPassword2.classList.remove("error");
    }
  }

  // Validación fechaNacimiento
  const fechaActual = new Date();
  const fechaNacimientoDate = new Date(fechaNacimiento.value);

  // && fechaNacimientoDate < fechaActual - 120
  if (fechaNacimientoDate > fechaActual || fechaNacimiento.value === "") {
    const helperFechaNacimiento = document.getElementById("helper-fecha");
    helperFechaNacimiento.innerHTML = "La fecha de nacimiento es obligatoria";
  } else {
    const helperFechaNacimiento = document.getElementById("helper-fecha");
    // helperFechaNacimiento.innerHTML = "";
    if (helperFechaNacimiento.innerHTML !== "") {
      helperFechaNacimiento.innerHTML = "";
    }
  }

  // Validación aceptaTerminos
  if (!aceptaTerminos.checked) {
    const helperAceptaTerminos = document.getElementById("helper-terminos");
    helperAceptaTerminos.innerHTML = "Debe aceptar los términos y condiciones";
  } else {
    const helperAceptaTerminos = document.getElementById("helper-terminos");
    // helperAceptaTerminos.innerHTML = "";
    if (helperAceptaTerminos.innerHTML !== "") {
      helperAceptaTerminos.innerHTML = "";
    }
  }

  window.location;
}
