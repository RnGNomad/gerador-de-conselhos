const botao = document.getElementsByClassName('advice-update')[0]

const conselhoSelecionado = document.getElementsByClassName('advice-id')[0]
const descricaoDoConselho = document.getElementsByClassName('advice-description')[0]

botao.addEventListener('click', async () => {
    const dica = await criarUmaDicaAleatoria()
    const conselho = dica.slip.advice
    const numeroDoConselho = dica.slip.id

    conselhoSelecionado.innerHTML = `<h2 class="titulo">Adivice ${numeroDoConselho}</h2>`

    descricaoDoConselho.innerHTML = `<p class="dica">
    ${conselho}</p>`
})

async function criarUmaDicaAleatoria() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}