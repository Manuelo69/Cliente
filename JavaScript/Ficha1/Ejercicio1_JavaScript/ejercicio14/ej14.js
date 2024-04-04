var bucle = false;
while(bucle == false){
    var ape = prompt(`¿Cual fue el apellido del primer presidente de la democracia`);
    if(ape == "Suarez" || ape == "Suárez" ) {
    alert(`El apellido es correcto, bienvenido al sistema`);
    bucle = true;
} else {
    alert(`El apellido es incorrecto, vuelve a intentarlo`);
}
}