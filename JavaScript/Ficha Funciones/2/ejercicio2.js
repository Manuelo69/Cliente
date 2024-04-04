addEventListener('load',inicio,false);

function inicio(){ 
  permutar.addEventListener('click',media,false);
}

function media(){
  let a,b;
  [a,b] = permuta_valores(num1.value,num2.value);
  num1.value=a;
  num2.value=b;
}

function permuta_valores(numero1,numero2){
  let [a,b] = [numero2, numero1];
  
  return [a,b];
}