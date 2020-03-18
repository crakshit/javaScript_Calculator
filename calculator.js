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
        try{
            var final = eval(result);
        }
        catch(err) {
            alert("Cannot compute with current expression.");
            final = 0;
        }
        $("input_value").value = final;
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

function changeSign(){
    if(checkNum(input_value.value)){
        input_value.value = input_value.value*(-1);
    }
    
}

function sin(){
    if(checkNum(input_value.value)){
    
        var val = Math.sin(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function cos(){
    if(checkNum(input_value.value)){
        var val = Math.cos(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function tan(){
    if(checkNum(input_value.value)){
        var val = Math.tan(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function sqrt(){
    if(checkNum(input_value.value)){
        var val = Math.sqrt(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function log(){
    if(checkNum(input_value.value)){
        var val = Math.log(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function exp(){
    if(checkNum(input_value.value)){
        var val = Math.exp(input_value.value);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function square() {
    if(checkNum(input_value.value)){
        var val = Math.pow(input_value.value,2);
        if(isNaN(val)){
            alert("Cannot compute with current value.");
            val = 0;
        }
        input_value.value = val;
    }
}

function percent() {
    var per = [];
    var v1, v2, final;
    
    if($("input_value").value.includes("+")){
        per = $("input_value").value.split("+");
        
        if(per.length == 2){
            v1 = parseFloat(per[0]);
            v2 = parseFloat(per[1])/100;
            v2 = v1*v2;
            
            final = v1 + v2;

            
        }else{
            alert("Cannot perform percentage function.");
            return;
            
        }
    }
    else if($("input_value").value.includes("-")){
        per = $("input_value").value.split("-");
        
        if(per.length == 2){
            v1 = parseFloat(per[0]);
            v2 = parseFloat(per[1])/100;
            v2 = v1*v2;
            
            final = v1 - v2;

            
        }else{
            alert("Cannot perform percentage function.");
            return;
            
        }   
    }
    else{
        alert("Cannot perform percentage function.")
        return;
    }
    
    $("input_value").value = final;
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