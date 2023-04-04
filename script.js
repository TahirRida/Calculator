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
//for the footer
let date = new Date();
let footerText = document.querySelector(".footerText");
footerText.textContent +=date.getFullYear();

// to clear the display
function clear(){
    let display = document.querySelector("#LastSelected");
    display.textContent ="";
};
// Lets's now implement the event Listener we'll be adding to the page
let visibleString =""; // the string that will be displayed on the claculator's screen
let operand1 = 0,
    operand2 = 0;// here I initialized the two operands
let operation; //this variable will store our operation

//Adding event listener to the clear button
let clear1 = document.querySelector("#clear");
clear1.addEventListener("click",(e)=>{
    clear();
    visibleString = "";
    operand1 = 0;
    operand2 = 0;
});

window.addEventListener("click",(e)=>{
    let display = document.querySelector("#LastSelected");
    let operations = ["+","-","*","/"];
    // adding user input to display
    if (!isNaN(e.target.id) || e.target.id === "."){
        if(visibleString.length < 9){
            visibleString += e.target.id;
            display.textContent = visibleString;
        }
    }
    //if the user selects an operation
    if (operations.includes(e.target.id)) {
        if (visibleString != ""){
            operation = e.target.id;
            if (operand1 === 0){
                operand1 = parseFloat(visibleString);
            }
            clear();
            visibleString ="";
        }
    }
    if (e.target.id === "="){
        if (operand1 === 0){
            
        }
        else {
            operand2 = parseFloat(visibleString);
            //console.log(operand1,operand2);
            if (operation === "+") {
                display.textContent = add(operand1,operand2);
            }
            if (operation === "-") {
                display.textContent = substract(operand1,operand2);
            }
            if (operation === "*") {
                display.textContent = multiply(operand1,operand2);
            }
            if (operation === "/") {
                display.textContent = divide(operand1,operand2);
            }
            visibleString = display.textContent;
            console.log(operand1,operand2,visibleString);
            operand1 = parseFloat(visibleString);
            operand2 = 0;
            operation ="";

        }
    }

})

