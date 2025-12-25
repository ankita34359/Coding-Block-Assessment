let show = document.getElementById('show');

function showNumbers(number){
    show.value += number;
}

let input1 = '';
let operator = '';

function operators(op){
    if(operator !== ''){
        return;
    }

    input1 = show.value;
    operator = op;
    show.value += op;
}

function calculate(){
    let input2 = show.value.slice(input1.length + 1);
    switch(operator){
        case '+':
            show.value = parseFloat(input1) + parseFloat(input2);
            break;
        case '-':
            show.value = parseFloat(input1) - parseFloat(input2);    
            break; 
        case '*':
            show.value = parseFloat(input1) * parseFloat(input2);    
            break; 
        case '/':
            show.value = parseFloat(input1) / parseFloat(input2);    
            break;     
    }
    operator = '';
    input1 = '';
}

function erase() {
  show.value = '';
  input1 = '';
  operator = '';
}

function decimal() {
  if (!show.value.includes('.')) {
    show.value += '.';
  }
}

function percentage(){
    let result = parseFloat(show.value) / 100;
    show.value = result; 
}

function Delete() {
    show.value = show.value.slice(0, -1);
}