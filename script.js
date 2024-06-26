const body = document.querySelector('body')
body.style.height = `100vh`
body.style.overflow = `hidden`
body.style.backgroundColor = `rgb(32, 32, 52)`
body.style.display = `flex`
body.style.justifyContent = `space-between`
body.style.alignItems = `center`
body.style.flexDirection = `column`;
body.style.fontFamily = `Arial`

const header = document.createElement('header')
header.style.backgroundColor = `rgb(0 0 0)`
header.style.height = `65px`
header.style.width = `110%`
header.style.display = `flex`
header.style.justifyContent = `space-between`
header.style.alignItems = `center`
body.appendChild(header)

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.style.marginLeft = '450px'
resetButton.style.backgroundColor = `rgb(216,216,191)`
resetButton.style.color = `black`
resetButton.style.border = `none`
resetButton.style.borderRadius = `10px`
resetButton.style.padding = `10px`
header.appendChild(resetButton)

const githubButton = document.createElement('button')
githubButton.textContent = 'GitHub'
githubButton.style.marginRight = '450px'
githubButton.style.backgroundColor = `rgb(216,216,191)`
githubButton.style.color = `black`
githubButton.style.border = `none`
githubButton.style.borderRadius = `10px`
githubButton.style.padding = `10px`
header.appendChild(githubButton)

githubButton.addEventListener('click', function() {
    window.location.href = 'https://github.com/julioc93-front/atividadepntdom'
})

resetButton.addEventListener('click', function() {
    nome.value = ''
    nota1.value = ''
    nota2.value = ''
    nota3.value = ''
    resultado.textContent = ''
    passou.textContent = ''
})

const div = document.createElement('div')
div.style.width = `1000px`
div.style.height = `500px`
div.style.display = `flex`
div.style.justifyContent = `space-around`
div.style.alignItems = `center`
div.style.flexDirection = `column`
div.style.backgroundColor = `rgb(217,217,243)`
div.style.borderRadius = `10px`
body.appendChild(div)

const texto = document.createElement('h1')
texto.textContent = `Atividade de Programação WEB`
texto.style.fontSize = `30px`

div.appendChild(texto)

const nome = document.createElement('input')
nome.style.height = `23px`
nome.style.width = `500px`
nome.placeholder = `Digite seu nome`
nome.style.borderRadius = `10px`
nome.style.border = `none`
nome.style.paddingLeft = `20px`
div.appendChild(nome)

const nota1 = document.createElement('input')
nota1.style.height = `23px`
nota1.style.width = `500px`
nota1.style.borderRadius = `10px`
nota1.style.border = `none`
nota1.style.paddingLeft = `20px`
nota1.placeholder = `Digite aqui sua primeira nota`
div.appendChild(nota1)

const nota2 = document.createElement('input')
nota2.style.height = `23px`
nota2.style.width = `500px`
nota2.style.borderRadius = `10px`
nota2.style.border = `none`
nota2.style.paddingLeft = `20px`
nota2.placeholder = `Digite aqui sua segunda nota`
div.appendChild(nota2)

const nota3 = document.createElement('input')
nota3.style.height = `23px`
nota3.style.width = `500px`
nota3.style.borderRadius = `10px`
nota3.style.border = `none`
nota3.style.paddingLeft = `20px`
nota3.placeholder = `Digite aqui sua terceira nota`
div.appendChild(nota3)

const resultado = document.createElement('p')
div.appendChild(resultado)

const passou = document.createElement('p')
div.appendChild(passou)

const btn = document.createElement('button')
btn.textContent = `Calcular média`
btn.style.color = `rgb(255,255,255)`
btn.style.width = `200px`
btn.style.height = `30px`
btn.style.borderRadius = `50px`
btn.style.backgroundColor = `rgb(32, 32, 52)`
div.appendChild(btn)

const footer = document.createElement('footer')
footer.style.height = `60px`
footer.style.width = `200%`
footer.style.backgroundColor = `rgb(0 0 0)`
body.appendChild(footer)

btn.addEventListener('click', function calcnota() {
    var n = nome.value
    var m1 = Number(nota1.value)
    var m2 = Number(nota2.value)
    var m3 = Number(nota3.value)

    var media = (m1 + m2 + m3) / 3
    resultado.innerHTML = `Bem vindo(a), <strong>${n}</strong>! Sua média é <strong>${media.toFixed(2)}</strong>`

if (media >= 7) {
    passou.innerHTML = `Você está.... <strong>APROVADO(a)!</strong> 😃`
    passou.style.color = `green`
} else {
    passou.innerHTML = `Que pena! Você está <strong>Reprovado(a)!</strong> 😢`
    passou.style.color = `red`
}
})
