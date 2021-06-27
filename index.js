"use strict"
import { data } from './data.js';
import { Card } from './card.js';
const todolist = document.querySelector('ul')
const btnAddToDo = document.querySelector('.btn-success')
const btnDelLast = document.querySelector('.btn-warning')
const btnDeLAll = document.querySelector('.btn-danger')
const formTitle = document.querySelector('.form-title')
const formDescription = document.querySelector('.form-description')


function renderElements() {
    let toDoListHTML = data.map(todo => {
        return new Card(todo.title, todo.discription).getHtml()
    }).join('')
    todolist.innerHTML = toDoListHTML
}
renderElements()

btnAddToDo.addEventListener('click', () => {
    let modalWindow = document.querySelector('.modal')
    modalWindow.style.display = "block"
    formTitle.value = ''           // пустое модальное окно
    formDescription.value = ''
})

//обработка кнопок для модального окна
const btnModalCloseTop = document.querySelector('.btn-close')
const btnModalClose = document.querySelector('.btn-secondary')
const btnModalAdd = document.querySelector('.btn-primary')
function hideWindow() {
    let modalWindow = document.querySelector('.modal')
    modalWindow.style.display = "none"
}

btnModalCloseTop.addEventListener('click', hideWindow)
btnModalClose.addEventListener('click', hideWindow)
btnModalAdd.addEventListener('click', () => {
    data.push(new Card(formTitle.value, formDescription.value))
    renderElements()
    hideWindow()
    
})

function deleteLastElement() {
    data.pop()
    renderElements()
}
btnDelLast.addEventListener('click', deleteLastElement)

function deleteAllElement() {
    data.splice(0, data.length)
    renderElements()
}
btnDeLAll.addEventListener('click', deleteAllElement)


// function renderElements() {
//     let toDoListHTML = data.map(function(todo) {
//         let element = new Card(todo.title, todo.discription)
//         console.log(element)
//         let elementHtml = element.getHtml()
//         console.log(elementHtml)
//         return elementHtml
//     })
//     console.log(toDoListHTML)
//     let elements = toDoListHTML.join('')
//     console.log(elements)
//     todolist.innerHTML = elements
// }