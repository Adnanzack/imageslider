const slide =document.querySelectorAll('.slide')
var counter =0;
slide.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)


const goprev =() =>{
    counter--
    if (counter < 0) {
        counter = slide.length - 1; // Set counter to the last image index
    }
    slideimage();
    slideimage()
    }


const gonext =() =>{
    counter++
    if (counter === slide.length) {
        counter = 0; // Set counter to the first image index
    }
    slideimage()
    }


const slideimage =() =>{
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
