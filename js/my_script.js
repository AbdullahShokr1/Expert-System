$(document).ready(function(){
    $("#close").click(function(){
        $("#alert").css("display","none");
    });
  });

function validateFormlogin() {
    let x1 = document.forms["myFormlog"]["username"].value;
    let x2 = document.forms["myFormlog"]["age"].value;
    if (x1 == "") {
      alert("Enter you name!!");
      return false;
    }else if(x2 == ""){
        alert("Enter your age!!");
      return false;
    }else if(isNaN(x2)){
        alert("Enter Number Not letter!!");
      return false;
    }
}

function validateForm() {
    let x1 = document.forms["myForm"]["Q1"].value;
    let x2 = document.forms["myForm"]["Q2"].value;
    let x3 = document.forms["myForm"]["Q3"].value;
    let x4 = document.forms["myForm"]["Q4"].value;
    let x5 = document.forms["myForm"]["Q5"].value;
    let x6 = document.forms["myForm"]["Q6"].value;
    if (x1 == "") {
      alert("Choice Yes||NO !! ,Q1 is Empty");
      return false;
    }else if(x2 == ""){
        alert("Choice Yes||NO !! ,Q2 is Empty");
      return false;
    }else if(x3 == ""){
        alert("Choice Yes||NO !! ,Q3 is Empty");
      return false;
    }else if(x4 == ""){
        alert("Choice Yes||NO !! ,Q4 is Empty");
      return false;
    }else if(x5 == ""){
        alert("Choice Yes||NO !! ,Q5 is Empty");
      return false;
    }else if(x6 == ""){
        alert("Choice Yes||NO !! ,Q6 is Empty");
      return false;
    }
}


