const btn = document.querySelector(".btn")
const container = document.querySelector(".container");

btn.addEventListener("click",(e) =>{
    e.preventDefault()

   if (btn.innerText === "light"){
    container.style.backgroundColor = "black"
    btn.innerText = "dark"
   } else if(btn.innerText === "dark"){
     container.style.backgroundColor = "white"
    btn.innerText = "light"
   }
})