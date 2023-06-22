let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')

let result = 0;

let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let modulus = document.querySelector('#modulus')
let reset = document.querySelector('#reset')

num1.value = 0;
num2.value = 0;

document.querySelector('#result').innerText= result;


plus.addEventListener('click',add)
minus.addEventListener('click',minusFunc)
multiply.addEventListener('click',Multiply)
divide.addEventListener('click',divideFunc)
modulus.addEventListener('click',modulusFunc)
reset.addEventListener('click',Reset)





function add(){
   result = parseInt(num1.value) + parseInt(num2.value)
   document.querySelector('#result').innerText = result;
}


function minusFunc(){
    result = parseInt(num1.value) - parseInt(num2.value)
    document.querySelector('#result').innerText = result;
 }

 
function divideFunc(){
    result = parseInt(num1.value) / parseInt(num2.value)
    document.querySelector('#result').innerText = result;
 }

 
function modulusFunc(){
    result = parseInt(num1.value) % parseInt(num2.value)
    document.querySelector('#result').innerText = result;
 }

 
function Multiply(){
    result = parseInt(num1.value) * parseInt(num2.value)
    document.querySelector('#result').innerText = result;
 }

 function Reset(){
    result = 0
    num1.value = 0
    num2.value = 0
    document.querySelector('#result').innerText = result;
 }