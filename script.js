let form = document.querySelector('form')
let buttonadd = document.querySelector('.buttonadd')
let textarea = document.querySelector('textarea')
let textvalue = document.querySelector('textarea.value')
let ul = document.querySelector('.maliste')
let lis = document.querySelectorAll('li')
let add = document.createElement('li')



for (let i = 0; i < lis.length; i++) {
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', deleteElement)
    lis[i].appendChild(button)
}

function deleteElement(event) {
    const target = event.target
    console.log(target.parentNode)
    target.parentNode.remove()
}


form.onsubmit = e => {
    e.preventDefault()
    textarea.value = ""
    
    

}

function remplace() {
    
    add.textContent = textarea.value
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', deleteElement)
    add.appendChild(button)
    ul.appendChild(add)
    
    
    
}



