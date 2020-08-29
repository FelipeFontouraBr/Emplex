// ABRINDO E FECHANDO MODAL

const card = document.querySelector(".cards") // Selecionando o botão
const modal = document.querySelector("#modal") // Selecionando o modal
const close = document.querySelector("#modal .header a") // Selecionando a imagem close

card.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})