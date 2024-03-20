const images= document.querySelectorAll(".images");
/*birden fazla images var o yüzden All denilir*/

images.forEach(image =>{
    image.addEventListener("click",()=>{
        removeActive();
        image.classList.add("active");
    })
} )

function removeActive(){
    images.forEach(image =>{
        image.classList.remove("active");
    })
}