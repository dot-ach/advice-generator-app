const pAdvice = document.getElementById("advicePh");
const pPrincipal = document.getElementById("text-advice")
const button = document.getElementById("dado");
const api = "https://api.adviceslip.com/advice/"
const fetchData  = require("./utils/fetchData");

const logic = () =>{
  const getElement = async (url_api) =>{
    try{
      const allElement = await fetchData(url_api);
      return allElement;
    }catch(error){
      console.log(error)
    }
  }
  getElement(api);
  pPrincipal.innerText = `${allElement}`;
  pAdvice.innerText = `Advice #${number}`
}

button.addEventListener("click", logic);