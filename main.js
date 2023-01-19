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
let modalGallery = document.querySelector("#modalGallery")
let galleryIcon1 = document.querySelector("#galleryIcon1")
let galleryIcon2 = document.querySelector("#galleryIcon2")
let iconCloseGallery = document.querySelector("#icon-close")
let modalImg1 = document.querySelector("#modal-img1")
let modalImg2 = document.querySelector("#modal-img2")
let modalImg3 = document.querySelector("#modal-img3")
let modalImg4 = document.querySelector("#modal-img4")
let modalValorInicial = 1;
let modalPrincipalImg = document.querySelector("#modal-principal-img")


galleryIcon2.addEventListener("click", ()=>{
    modalNext()
})
galleryIcon1.addEventListener("click", ()=>{
    modalPrevius()
})

iconCloseGallery.addEventListener("click", ()=>{
    modalGallery.style.display = "none"
})


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



modalImg1.addEventListener("click", ()=>{
    modalPrincipalImg.style.backgroundImage = "url(./images/image-product-1.jpg)"
    modalPrincipalImg.style.backgroundPositionY = "-0px"
    modalValorInicial = 1
})
modalImg2.addEventListener("click", ()=>{
    modalPrincipalImg.style.backgroundImage = "url(./images/image-product-2.jpg)"
    modalPrincipalImg.style.backgroundPositionY = "-0px"
    modalValorInicial = 2
})
modalImg3.addEventListener("click", ()=>{
    modalPrincipalImg.style.backgroundImage = "url(./images/image-product-3.jpg)"
    modalPrincipalImg.style.backgroundPositionY = "-0px"
    modalValorInicial = 3
})
modalImg4.addEventListener("click", ()=>{
    modalPrincipalImg.style.backgroundImage = "url(./images/image-product-4.jpg)"
    modalPrincipalImg.style.backgroundPositionY = "-0px"
    modalValorInicial = 4
})






buyButton.addEventListener("click", ()=>{
    if(inputNumber.value > 0){
        totalProductos = 125.00 * (inputNumber.value);
        notification.style.display = "block"
        notification.innerText = inputNumber.value
        cartShow.style.display = "block"
        empty.style.display = "none"
        
        productPrice.innerHTML = `125.00 x ${inputNumber.value} <span id="sumaUnidades">$${totalProductos}.00</span>`
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

principalImg.addEventListener("click", ()=>{
    modalGallery.style.display = "flex"
    galleryIcon1.style.display = "block"
    galleryIcon2.style.display = "block"
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
function modalNext(){
    modalValorInicial++;
    if(modalValorInicial == 5){
        modalValorInicial = 1;
    }
    
    modalPrincipalImg.style.backgroundImage = `url(./images/image-product-${modalValorInicial}.jpg)`
    modalPrincipalImg.style.backgroundPositionY = "0px"
    
    
    

}
function modalPrevius(){
    modalValorInicial--;
    if(modalValorInicial == 0){
        modalValorInicial = 4;
    }
    
   
    modalPrincipalImg.style.backgroundImage = `url(./images/image-product-${modalValorInicial}.jpg)`
    modalPrincipalImg.style.backgroundPositionY = "0px"
    
    
   

}


