let display = document.getElementById("dis");

function addToDis(input){
    display.value += input;
}

function disClear(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}