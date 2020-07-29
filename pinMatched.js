 // pick out different random number  
 function randomNumber (){
    var fourDigitRandomNum = Math.floor(1000 + Math.random() * 9000);
    return fourDigitRandomNum;
    
}

// displaying  Number in the input field
function calculate(x){
    myForm.display.value = myForm.display.value + x;        // Current value + after button click value
}


//Compare Two input Field value
 function compareInputField (){
        const randomInputBox = document.getElementById('randomNumBox').value;
        const numberPadInputBox = document.getElementById('numberBox').value;
        
        if(randomInputBox === numberPadInputBox){
            document.getElementById('rightPin').style.display='block';
        }else{
            document.getElementById('wrongPin').style.display='block';
        }
       
        

}


// BackSpace 

function backspace (){
    let back = document.getElementById('numberBox').value;
    document.getElementById('numberBox').value=back.substring(0, back.length-1);
}


// Clear Number pad input Field
function cleareNumberPadInputField (){
    document.getElementById('numberBox').value ='';
}

//clear Pin Match AND don't Match notification
function clearPinMatchNotif (){
    document.getElementById('rightPin').style.display='none';
    document.getElementById('wrongPin').style.display='none';
}

