console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', function(event){
console.log('it works')
let toggle = document.querySelector('nav')
toggle.classList.toggle('coolTog')
let blurBackground = document.querySelector('.container')
blurBackground.style.blur= '10px'

})