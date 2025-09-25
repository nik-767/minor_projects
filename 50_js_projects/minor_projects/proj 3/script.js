 let letter = document.querySelectorAll('span');
letter.forEach((item) =>{
item.addEventListener("click", () => {
    item.classList.toggle("active")
})
})

