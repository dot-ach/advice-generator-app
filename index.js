const nAdvice = document.getElementById("nAdvice");
const pPrincipal = document.getElementById("text-advice")
const button = document.getElementById("dado");
const api = "https://api.adviceslip.com/advice"

const logic = () =>{
  fetch(api)
    .then(res => res.json())
    .then(data => {
      const id = data.slip.id;
      const phrase = data.slip.advice;
      nAdvice.innerText = 'Advice # '+ id;
      pPrincipal.innerText = phrase;
  });
}

button.addEventListener("click", logic);