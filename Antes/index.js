
const colors = ['Red', 'Blue', 'Black', 'Grey','Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function (){
    const randomColor = getRandonColor()
    document.body.style.background = colors [randomColor]
//    console.log(randomColor)
    color.textContent = colors [randomColor]
})

//Gerar os numeros randomicos
function getRandonColor () {
    return Math.floor(Math.random() * colors.length)
}