let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function MudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")
    
    

    setTimeout(() => {
        tenis.classList.remove("troca-efeito")
        tenis.src = imagem
        body.style.background = cor
    }, 500);

}

