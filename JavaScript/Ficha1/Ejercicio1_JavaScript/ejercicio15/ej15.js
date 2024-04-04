var bucle = false;
while (bucle == false) {
    nom = prompt(`¿Cual fue el primer presidente de la democracia española?`);

    switch (nom) {
        case nom = `Adolfo Suarez`:
            alert(`Es correcto, bienvenido al sistema`);
            bucle = true;
            break;
        case nom = `Adolfo Suárez`:
            alert(`Es correcto, bienvenido al sistema`);
            bucle = true;
            break;
        case nom = `Adolfo`:
            alert(`Te falta el apellido`);
            break;
        case nom = `Suarez`:
            alert(`Te falta el nombre`);
            break;
        case nom = `Suárez`:
            alert(`Te falta el nombre`);
            break;
        default:
            alert(`ERROR, Intentelo de nuevo`);
    }
}
