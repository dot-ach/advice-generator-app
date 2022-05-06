const pAdvice = document.getElementById("advicePh");
const pPrincipal = document.getElementById("text-advice")
const button = document.getElementById("dado");
const logic = () =>{
  number = 177
  pPrincipal.innerText = "Funcionaa!!";
  pAdvice.innerText = `Advice #${number}`
}

button.addEventListener("click", logic);