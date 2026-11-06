const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validation
  let valid = true;

  const nome = document.getElementById("nome");
  const nomeErr = document.getElementById("nomeError");
  if (nome.value.trim().length < 3) {
    nomeErr.textContent = "// Mínimo de 3 caracteres obrigatório";
    valid = false;
  } else {
    nomeErr.textContent = "";
  }

  const email = document.getElementById("email");
  const emailErr = document.getElementById("emailError");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    emailErr.textContent = "// Endereço de email inválido";
    valid = false;
  } else {
    emailErr.textContent = "";
  }

  const assunto = document.getElementById("assunto");
  const assuntoErr = document.getElementById("assuntoError");
  if (!assunto.value) {
    assuntoErr.textContent = "// Selecionar canal obrigatório";
    valid = false;
  } else {
    assuntoErr.textContent = "";
  }

  const mensagem = document.getElementById("mensagem");
  const mensagemErr = document.getElementById("mensagemError");
  if (mensagem.value.trim().length < 10) {
    mensagemErr.textContent =
      "// Mensagem demasiado curta — mínimo 10 caracteres";
    valid = false;
  } else {
    mensagemErr.textContent = "";
  }

  if (!valid) return;

  form.reset();
  successMsg.classList.add("visible");

  setTimeout(function () {
    successMsg.classList.remove("visible");
  }, 4000);
});
