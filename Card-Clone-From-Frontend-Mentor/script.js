
var stackElements = document.querySelectorAll('.for-order')
var text = stackElements[0]
var image = stackElements[1]
window.addEventListener('resize', ()=>{
    if(window.innerWidth>991){
        text.style.order = 1
        image.style.order = 2
    } else {
        text.style.order = 2
        image.style.order = 1
    }
})
