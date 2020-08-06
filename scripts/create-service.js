// Pegando as provincias
function populateState() {
    const stateSelect = document.querySelector("select[name=state]")

    //Fazendo uma promossa e devolvendo
    fetch('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json')
    .then( (res) => {
        return res.json() //transformando a resposta em json
    })
    //Pegando os estados
    .then( states => {

        for( state of states ) {
            stateSelect.innerHTML += `<option value="${state.nm}">${state.nm}</option>`
        }

    })

}

populateState()

// Pegando cidades
/*
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")

    //const ufValue = event.target.value

    const url = `https://raw.githubusercontent.com/IagoLast/pselect/master/data/municipios.json`

    fetch(url)
    .then( (res) => {
        return res.json() //transformando a resposta em json
    })
    //Pegando os estados
    .then( cities => {

        for( city of cities ) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nm}</option>`
        }

        citySelect.disabled = false

    })
}

document
    .querySelector("select[name=state]")
    .addEventListener("change", getCities)
*/

// Itens of Services
// Pegandos todos li
const itemsServices = document.querySelectorAll(".items-grid li")

for (const item of itemsServices) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

// variavel: sso é um array, onde vou tirar e selecionar dados
let selectedItems = []

function handleSelectedItem() {
    const itemLi = event.target

    // Adicionar ou remover uma classe do li
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    

    // verificar se existem items selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item === itemId
        return itemFound
    } )

    // se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        // Tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } 
    // se não estiver selecionado, adicionar a seleção
    // adicionar a seleção
    else {
        selectedItems.push(itemId)
    }

    console.log(selectedItems)
    

    // atualizar o campo escondido com os dados itens selecionados
    collectedItems.value = selectedItems
}