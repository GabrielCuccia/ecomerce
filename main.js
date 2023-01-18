let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let inputNumber = document.querySelector("#inputNumber")
let iconMenu = document.querySelector("#iconMenu")
let modalMenu = document.querySelector("#modal-menu")
let iconCart = document.querySelector("#iconCart")
let modalCart = document.querySelector("#modal-cart")
let headerCart = document.querySelector("#headerCart")
let iconClose = document.querySelector("#modalIconClose")
let notification = document.querySelector("#notification")
let buyButton = document.querySelector("#buyButton")
let cartShow = document.querySelector("#modal-cart-show")
let empty = document.querySelector("#modal-empty")
let sumaUnidades = document.querySelector("#sumaUnidades")
let productPrice = document.querySelector("#productPrice")
let productPriceFijo = 125.00;
let totalProductos = 0;


buyButton.addEventListener("click", ()=>{
    if(inputNumber.value > 0){
        totalProductos = 125.00 * inputNumber.value;
        notification.style.display = "block"
        notification.innerText = inputNumber.value
        cartShow.style.display = "block"
        empty.style.display = "none"
        
        productPrice.innerHTML = `125.00 x ${inputNumber.value} <span id="sumaUnidades">${totalProductos}</span>`
        
       

       
       
    } 
})

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