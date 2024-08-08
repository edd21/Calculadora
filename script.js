function sumar(){
  var num1= document.getElementById('num1').value;
  var num2= document.getElementById('num2').value;
  if(num1 == ''){
    num1=0;
  }
  if(num2 == ''){
    num2=0;
  }

  var sumar = parseInt(num1) + parseInt(num2);
  document.getElementById('resultado').value = sumar;
}

function restar(){
  var num1= document.getElementById('num1').value;
  var num2= document.getElementById('num2').value;
  if(num1 == ''){
    num1=0;
  }
  if(num2 == ''){
    num2=0;
  }

  var restar = parseInt(num1) - parseInt(num2);
  document.getElementById('resultado').value = restar;
}

function multiplicar(){
  var num1= document.getElementById('num1').value;
  var num2= document.getElementById('num2').value;
  if(num1 == ''){
    num1=0;
  }
  if(num2 == ''){
    num2=0;
  }

  var multiplicar = parseInt(num1) * parseInt(num2);
  document.getElementById('resultado').value = multiplicar;
}

function dividir(){
  var num1= document.getElementById('num1').value;
  var num2= document.getElementById('num2').value;
  if(num1 == ''){
    num1=0;
  }
  if(num2 == '' || num2 == 0){
    alert("No se puede realizar la division entre cero");
    location.reload();
  }
  else{
  var dividir = parseInt(num1) / parseInt(num2);
  document.getElementById('resultado').value = dividir;
  }
}