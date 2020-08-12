const buttonSearch = document.querySelectorAll("#page-home main a")

const modal = document.querySelector("#modal")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})