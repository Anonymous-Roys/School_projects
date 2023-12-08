var sides = document.getElementsByClassName("side");
var images = document.getElementsByClassName("image")

function fn(sideName){
    for (image of images){
        image.classList.remove("present")
    }
    document.getElementById(sideName).classList.add("present")
}


document.getElementById("")