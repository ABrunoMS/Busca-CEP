const inputCep = document.querySelector('#cepInput')
const button = document.querySelector('button')
const dados = document.querySelector('pre')

button.addEventListener('click', handleclick)

async function handleclick() {
    const cep = inputCep.value

    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await result.json()

    dados.innerHTML = JSON.stringify(data)
}