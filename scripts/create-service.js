
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
            stateSelect.innerHTML += `<option value="${state.id}">${state.nm}</option>`
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