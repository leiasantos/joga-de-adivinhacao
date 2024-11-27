/*VARIAVEIS*/
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let numberRandom = Math.round(Math.random() * 10);
let attempts = 1;

/*EVENTOS*/
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", resetClick);
document.addEventListener('keydown',function(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    resetClick();
  }
});

/*FUNÇÃO CALLBACK*/
function handleTryClick(event) {
  event.preventDefault();

  const numberInput = document.querySelector("#numberInput");

  if (Number(numberInput.value) == numberRandom) {
    toggleScreen()

   screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas`;

    console.log();
  }
  
  numberInput.value = "";
  attempts++;
}


function resetClick(){
    toggleScreen()
    attempts = 1;
    numberRandom = Math.round(Math.random() * 10);
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  
}
