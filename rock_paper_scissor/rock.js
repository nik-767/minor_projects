let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".hands");

choices.forEach((hands) =>{

  hands.addEventListener("click", ()=> {
  const  handsId = hands.getAttribute("id");
    console.log("choices are clicked:", handsId)
  });
});