var arrHospital;
var indice;
var arrImagenesHabitaciones;
var numHab;
var paciente1;



addEventListener('load', cargar, false);

function cargar() {
    var selectHabitaciones = document.querySelector("#habitaciones");
    arrImagenesHabitaciones = document.querySelectorAll(".ocupado");
    arrHospital = new Array();
    for (let i = 0; i < 10; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(`Habitacion ${i + 1}`);
        opt.appendChild(texto);
        opt.value = `opcion ${i + 1}`;
        selectHabitaciones.appendChild(opt);
    }

    for (let i = 0; i < 10; i++) {
        arrHospital[i] = new HabitaHos(i + 1, 0, 0);

    }
    boton1.addEventListener("click", crearPaciente, false);
    boton2.addEventListener("click", VerInformacionPaciente, false);
    boton3.addEventListener("click", darDeAlta, false);
    boton4.addEventListener("click", asginarTratamiento, false);


    function crearPaciente() {
        var numHab = asignarNumeroHabitacion();
        arrHospital[numHab].codPaciente = cod.value;
        arrHospital[numHab].foto = fot.value.substring(12, fot.value.length);
        arrImagenesHabitaciones[numHab].src = "Ocupado.png";
        // paciente1 = new HabitaHos(numHab, cod.value, fot.value.substring(12, fot.value.length));
        /*            if (arrHospital[numHab] == null) {
                        arrHospital.splice(numHab, 0, paciente1);              
                    } else {
                        alert("Habitacion ya ocupada");
                    }*/
    }

    function asignarNumeroHabitacion() {
        for (let i = 0; i < 10; i++) {
            if (arrHospital[i].codPaciente == 0) {
                numHab = i;
                i = 10;
            }
        }
        return numHab;
    }

    function VerInformacionPaciente() {

        indice = document.querySelector("#habitaciones").selectedIndex;
        if (arrHospital[indice].codPaciente == 0) {
            alert("Esta habitacion no tiene paciente");
            resultado.value = "";
        } else {
            // alert(arrHospital[indice].informacion());
            resultado.value = arrHospital[indice].informacion();
        }

    }

    function darDeAlta() {
        indice = document.querySelector("#habitaciones").selectedIndex;
        if (arrHospital[indice].codPaciente == 0) {
            alert("No se puede dar de alta, habitacion vacia");
        } else {
            arrImagenesHabitaciones[indice].src = "Desocupado.jpg";
            arrHospital.splice(indice, 1);
        }


    }

    function asginarTratamiento() {
        indice = document.querySelector("#habitaciones").selectedIndex;
        if (arrHospital[indice].codPaciente == 0) {
            alert("No se puede asignar tratamiento, habitacion vacia");
        } else {
            arrHospital[indice].tratamiento.push(tra.value);
        }
    }

}