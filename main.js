let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let inputNumber = document.querySelector("#inputNumber")
let iconMenu = document.querySelector("#iconMenu")
let modalMenu = document.querySelector("#modal-menu")
let iconCart = document.querySelector("#iconCart")
let modalCart = document.querySelector("#modal-cart")
let headerCart = document.querySelector("#headerCart")
let iconClose = document.querySelector("#modalIconClose")



iconCart.addEventListener("click", ()=>{
    if (modalCart.style.display == "grid"){
        modalCart.style.display = "none"
    }else{
        modalCart.style.display = "grid";
    }
    
})



iconMenu.addEventListener("click", ()=>{
   modalMenu.style.display = "flex";
   headerCart.style.zIndex = "-1";
})
iconClose.addEventListener("click", ()=>{
    modalMenu.style.display = "none";
    headerCart.style.zIndex = "1";
})



plus.addEventListener("click", ()=>{
    inputNumber.value++;
})
minus.addEventListener("click", ()=>{
    if(inputNumber.value > 0){
        inputNumber.value--;
    }
    
})






if (inputNumber.value == 0){
    console.log("hola")
}