let images=document.querySelectorAll(".img")
let mainphoto=document.querySelector(".mainImg")

// console.log(images)


images.forEach((image)=>{

    image.addEventListener("click",function changeImg(e){
        mainphoto.style.backgroundImage=`url('${image.src}')`
    }
    )
// console.log(e)
})
// wrapper.addEventListener('mouseenter',(index)=>{

//     wrapper.
// })




