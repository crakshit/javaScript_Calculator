"use strict";
var $ = function(id) { return document.getElementById(id); };

function insert(num) {
    if($("input_value").value == 0){
        $("input_value").value = num;
    }
    else{
        $("input_value").value = $("input_value").value + num;
    }
}

function compute() {
    var result = $("input_value").value;
    
    if(result){
        $("input_value").value = eval(result);
    }
}

function erase() {
    $("input_value").value = $("input_value").value.substring(0,$("input_value").value.length -1);
}

function checkNum(num){
    if(isNaN(num)){
        alert("Enter valid value");
        return false;
    }
    else{
        console.log("Value is number.");
        return true;
    }
}

function sin(){
    if(checkNum(input_value.value)){
    input_value.value = Math.sin(input_value.value);
    }
}

function cos(){
    if(checkNum(input_value.value)){
    input_value.value = Math.cos(input_value.value);
    }
}

function tan(){
    if(checkNum(input_value.value)){
    input_value.value = Math.tan(input_value.value);
    }
}

function sqrt(){
    if(checkNum(input_value.value)){
    input_value.value = Math.sqrt(input_value.value);
    }
}

function log(){
    if(checkNum(input_value.value)){
    input_value.value = Math.log(input_value.value);
    }
}

function exp(){
    if(checkNum(input_value.value)){
    input_value.value = Math.exp(input_value.value);
    }
}

function square() {
    if(checkNum(input_value.value)){
	  input_value.value = Math.pow(input_value.value,2);
    }
}

function keyDown(e) {
    
    console.log(e.code);
    
    switch(e.code) {
        case "NumpadMultiply":
            insert('*');
            break;
        case "NumpadDivide":
            insert('/');
            break;
        case "NumpadSubtract":
            insert('-');
            break;
        case "NumpadAdd":
            insert('+');
            break;
        case "NumpadDecimal":
            insert('.');
            break;
        case "Numpad9":
            insert(9);
            break;
        case "Numpad8":
            insert(8);
            break;
        case "Numpad7":
            insert(7);
            break;
        case "Numpad6":
            insert(6);
            break;
        case "Numpad5":
            insert(5);
            break;
        case "Numpad4":
            insert(4);
            break;
        case "Numpad3":
            insert(3);
            break;
        case "Numpad2":
            insert(2);
            break;
        case "Numpad1":
            insert(1);
            break;
        case "Numpad0":
            insert(0);
            break;
        case "NumpadEnter":
            compute();
            break;
        case "Enter":
            compute();
            break;    
        case "Backspace":
            erase();
            break;
        case "Delete":
            $("input_value").value = 0;
            break;

        default:
            alert("Enter valid number.");
    }
    
    
}

window.onload = function(){
    
    document.addEventListener('keydown', keyDown);
}