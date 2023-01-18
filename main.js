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
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
let img4 = document.querySelector("#img4")
let principalImg = document.querySelector("#principal-img")
let iconDelete = document.querySelector("#iconDelete")
let iconNext = document.querySelector("#icon-next")
let iconPrevius = document.querySelector("#icon-previus")
let valorInicialImg = 1;


iconPrevius.addEventListener("click", ()=>{
    previus()
    
})
iconNext.addEventListener("click", ()=>{
    next()
})



iconDelete.addEventListener("click", ()=>{
    cartShow.style.display = "none"
    empty.style.display = "grid"
    notification.style.display = "none"


})

img1.addEventListener("click", ()=>{
    principalImg.style.backgroundImage = "url(./images/image-product-1.jpg)"
    img1.style.opacity = "0.5"
    img2.style.opacity = "1"
    img3.style.opacity = "1"
    img4.style.opacity = "1"
})
img2.addEventListener("click", ()=>{
    principalImg.style.backgroundImage = "url(./images/image-product-2.jpg)"
    img2.style.opacity = "0.5"
    img1.style.opacity = "1"
    img3.style.opacity = "1"
    img4.style.opacity = "1"
})
img3.addEventListener("click", ()=>{
    principalImg.style.backgroundImage = "url(./images/image-product-3.jpg)"
    img3.style.opacity = "0.5"
    img2.style.opacity = "1"
    img1.style.opacity = "1"
    img4.style.opacity = "1"
})
img4.addEventListener("click", ()=>{
    principalImg.style.backgroundImage = "url(./images/image-product-4.jpg)"
    img4.style.opacity = "0.5"
    img2.style.opacity = "1"
    img3.style.opacity = "1"
    img1.style.opacity = "1"
})





buyButton.addEventListener("click", ()=>{
    if(inputNumber.value > 0){
        totalProductos = 125.00 * (inputNumber.value);
        notification.style.display = "block"
        notification.innerText = inputNumber.value
        cartShow.style.display = "block"
        empty.style.display = "none"
        
        productPrice.innerHTML = `125.00 x ${inputNumber.value} <span id="sumaUnidades">${totalProductos}.00</span>`
        inputNumber.value = 0;
        
       

       
       
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
function next(){
    valorInicialImg++;
    if(valorInicialImg == 5){
        valorInicialImg = 1;
    }
    
    principalImg.style.backgroundImage = `url(./images/image-product-${valorInicialImg}.jpg)`
    
    
    

}
function previus(){
    valorInicialImg--;
    if(valorInicialImg == 0){
        valorInicialImg = 4;
    }
   
    principalImg.style.backgroundImage = `url(./images/image-product-${valorInicialImg}.jpg)`
    
    
   

}


