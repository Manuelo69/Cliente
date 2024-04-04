var temperaturas_ciudades = new Array(2);
temperaturas_ciudades[0] = new Array("Galicia",34,2,6);
temperaturas_ciudades[1] = new Array("Asturias",6,7,7);
temperaturas_ciudades[2] = new Array("Cantabria",7,9,5);

alert(`${temperaturas_ciudades[1][0]} ${temperaturas_ciudades[1][1]}`);
var total = 0;
for (let i = 0; i < temperaturas_ciudades.length; i++) {
    total = 0; 
   for (let j = 1; j < temperaturas_ciudades[i].length; j++) {
     total += temperaturas_ciudades[i][j];
   } 
   temperaturas_ciudades[i].push(total);
 
}
alert(temperaturas_ciudades[0]);
alert(temperaturas_ciudades[1]);
alert(temperaturas_ciudades[2]);