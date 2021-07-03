console.log("is this")

function hide(element) {
    element.remove();
}

var point = 159

function addPoint(){
    point++
    var point_num = document.querySelector("#point_num")
    point_num.innerHTML = point
    
}

function message() {
    for(var i = 0; i < 13000; i++)
    console.log("Delayed message");    
}
    

setTimeout(message, 1300);
console.log("The Ninjas have won!");