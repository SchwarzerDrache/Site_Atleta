var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
)


// Abrir menu lateral
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.side')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})