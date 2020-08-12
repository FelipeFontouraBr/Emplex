// ABRINDO E FECHANDO MODAL

const buttonSearch = document.querySelector("#page-home main a") // Selecionando o botão
const modal = document.querySelector("#modal") // Selecionando o modal
const close = document.querySelector("#modal .header a") // Selecionando a imagem close

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})