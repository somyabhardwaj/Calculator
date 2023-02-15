 // add event listener to form submit event
      var form = document.getElementById("additionForm");
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent form submission
        addNumbers();
      });
function addNumbers() {
 
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = "The sum is: " + sum;
   
}
  

