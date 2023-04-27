function show(val) {
    document.getElementById("display").value += val
}

function compute(){
    document.getElementById("display").value = eval(document.getElementById("display").value)
}

function erase(){
    document.getElementById("display").value = ""
}
/*function add(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = Number(a) + Number(b)
    document.getElementsByClassName('output')[0].innerText = `Sum of the two numbers is ${out}`
}
function subtract(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = Number(a) - Number(b)
    document.getElementsByClassName('output')[0].innerText = `Difference between the two numbers is ${out}`
}*/

//combining functions into one

/*const calc = (opt)=> {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = 0;
    if (opt == "Add"){
        out = `Sum of numbers is ${Number(a) + Number(b)}`
    } else{
        out = `Sub of numbers is ${Number(a) - Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText = out
}*/



