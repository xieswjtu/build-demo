const carousel = document.querySelector(".carousel")
const imageWidth = carousel.children[0].offsetWidth

console.log(imageWidth)
const move = function(){
    carousel.left = carousel.scrollLeft -imageWidth
    console.log(1)
    if (carousel.offsetLeft === imageWidth*carousel.children.length){
        carousel.offsetLeft = 0
    }


}

let timer = setInterval(move,1500)