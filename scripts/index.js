const buttonSearch = document.querySelectorAll("#page-home main a") // Selecionando o botão
const modal = document.querySelector("#modal") // Selecionando o modal
const close = document.querySelector("#img") // Selecionando a imagem close

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})