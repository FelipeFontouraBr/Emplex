
function populateState() {
    const stateSelect = document.querySelector("select[name=state]")

    //Fazendo uma promossa e devolvendo
    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
    .then( (res) => {
        return res.json() //transformando a resposta em json
    })
    //Pegando os estados
    .then( states => {
        stateSelect.innerHTML = `<option value="1">Valor</option>`
    })


}

populateState()

document
    .querySelector("select[name=state]")
    .addEventListener("change", function() {
        console.log('Opa, mudei véi')
    })