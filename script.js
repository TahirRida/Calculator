//Let's write the basic functions

//addition

function add (operator1,operator2){
    return operator1 + operator2;
}

//substraction

function substract (operator1,operator2){
    return operator1 - operator2;
}

//multiplication

function multiply (operator1,operator2){
    return operator1 * operator2;
}

//division

function divide(operator1,operator2){
    if (operator2 != 0){
        return operator1/operator2
    }
    else{
        return "Erreur : Division par 0";
    }
}
let operations = ["+","-","*","/"];
let selected = document.getElementsByClassName(".LastSelected");
window.addEventListener("click",(e)=>{
    if (!isNaN(e.target.id)){
        console.log(e.target.id);
        console.log(selected[0]);
        selected[0].innerHTML = selected[0].innerHTML+e.target.id;
    }
})
function clear(){
    let Selected = document.querySelector("#LastSelected");
    Selected.innerHTML = "";
}