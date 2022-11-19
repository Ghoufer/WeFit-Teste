const buttons = document.getElementsByClassName('btn-primary')

//*** Atualizando o Menu ***
const menu = document.getElementsByClassName("btn-group-vertical")

menu[0].classList.add('btn-group-horizontal')
menu[0].classList.remove('btn-group-vertical')


//*** Atualizando o Header ***
const header = document.getElementsByClassName('jumbotron')

header[0].classList.add('text-right')
header[0].style.color = '#FFF'
header[0].style.backgroundColor = '#6B757E'

buttons[0].classList.add('btn-success')
buttons[0].classList.remove('btn-primary')


//*** Atualizando os Cards ***
const cards = document.getElementsByClassName('col-lg-3')

cards[0].style.order = '2'
cards[1].style.order = '4'
cards[2].style.order = '3'
cards[3].style.order = '1'

//Continua sendo posição 0, pois o botão do header não possui mais a classe 'btn-primary'
buttons[0].classList.add('btn-success')
buttons[0].classList.remove('btn-primary')


//*** Atualizando a Lista ***
const listGroup = document.getElementsByClassName('list-group')

function createLi(text, className) {
    
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(text))

    li.setAttribute('class', 'list-group-item ' + className)

    listGroup[0].appendChild(li)
}

createLi('Quarto item', 'active')
createLi('Quinto item')

const listItems = document.getElementsByClassName('list-group-item')

listItems[0].classList.remove('active')