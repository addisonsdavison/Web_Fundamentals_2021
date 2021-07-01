function custom() {
    
    console.log("This cart is empty!");
}

function hide(element) {
    element.remove();
}

function over(){
    var image = document.querySelector(".plant")
    image.src = "succulents-2.jpg"
}

function out(){
    var image = document.querySelector(".plant")
    image.src = "succulents-1.jpg"
}