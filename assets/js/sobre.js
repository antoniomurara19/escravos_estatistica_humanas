const menu = document.querySelector('.menu')
const side_bar = document.querySelector('.side-bar')
const c = document.querySelector('.c')

menu.addEventListener('click',()=>{
    side_bar.style.left = '0'
    side_bar.style.top = '10vh'
})
c.addEventListener('click',()=>{
    side_bar.style.left = '-200vw'
})