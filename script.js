function open(){
  document.querySelector("#h1")
  h1.setAttribute('style', 'background-color:lightgray; color:red; font-style:italic; text-align: center; margin:0px');
  }
function Scan() {
 
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
}
var num1,num2;
function Sum(){
  Scan();
 
  var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}
function Multiply(){
  Scan();
 
  var sum = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = "The multiply is: " + sum;
}
function Substract(){
  Scan();
  
  var sum = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = "The Substraction is: " + sum;
}
function Divide(){
  Scan();
  
  var sum = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").innerHTML = "The division is: " + sum;
}


