const array = ['pato','ganzo','pollo'];
var primer = array[0];
var segundo = array[1];
var tercero = array[2];

alert(`${primer}, ${segundo}, ${tercero}`);

let x = 2;
let y = 5;
alert(`valores de x e y ${x} y ${y}`);
[x,y] = [y,x];
alert(`valores de x e y ${x} y ${y}`);

function f() {return [1,2];}

var a, b;
[a, b] = f();
console.log(`A es ${a} y b es ${b}`);

var a = f();
console.log(`A es ${a} `);


var c, d, rest;
[a, b] = [10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10.20,30,40,50];
console.log(a);
console.log(b);
console.log(rest);

