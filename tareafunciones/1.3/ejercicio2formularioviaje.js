addEventListener('load',cargar,false);

function cargar(){
    botonTotal.addEventListener("click",calcularTotal,false);
    ciudad.addEventListener("change",sumarMeter,false);
}

function calcularTotal(){
    
    let precioHotel, impuesto, precioAvion, precioCoche, precioTotal;

    [precioHotel,impuesto] = coste_hotel(numNochesHotel.value,estrellas.value);
    precioAvion = coste_avion(ciudad.value,tipoVuelo.value);
    precioCoche = coste_alquiler_coche(numNochesCoche.value);
    precioTotal = parseFloat(precioHotel)+parseFloat(impuesto)+parseFloat(precioAvion)+parseFloat(precioCoche);

    let tarifa=`Tarifa:
Precio del Hotel: ${precioHotel}
Impuesto Turistico: ${impuesto}
Precio del Avión: ${precioAvion}
Precio del Alquiler del Coche: ${precioCoche}


Total: ${precioTotal}
`;
    tarifaText.value=tarifa;
}

function sumarMeter(){
    let meterLista = document.querySelectorAll("meter");
    
    meterLista[ciudad.selectedIndex].value+=1;
}

function coste_hotel(noches,precio){
    let precioTotal=parseFloat(noches)*parseFloat(precio);
    let impuestoTuristico= (precio*2)/100;
    return [precioTotal,impuestoTuristico];
}

function coste_avion(ciudad,tipo){
    let precio=0;
    
    switch(ciudad){
        case "madrid":
            if(tipo=="idayvuelta"){
                precio=parseFloat(400*0.9);
            }else if(tipo=="ida"){
                precio=200;
            }else{
                precio=200;
            }
        break;
        case "tokio":
            if(tipo=="idayvuelta"){
                precio=parseFloat(1000*0.9);
            }else if(tipo=="ida"){
                precio=500;
            }else{
                precio=500;
            }
        break;
        case "berlin":
            if(tipo=="idayvuelta"){
                precio=parseFloat(140*0.9);
            }else if(tipo=="ida"){
                precio=70;
            }else{
                precio=70;
            }
        break;
        case "belgica":
            if(tipo=="idayvuelta"){
                precio=parseFloat(74*0.9);
            }else if(tipo=="ida"){
                precio=37;
            }else{
                precio=37;
            }
        break;
    }
    return precio;
}

function coste_alquiler_coche(noches){
    let precio = 0;
    if(si.value.checked){
        if(noches<3){
            precio=noches*40;
        }else if(noches>=7){
         precio=(noches*40)-50;
        }else{
            precio=(noches*40)-20;
        }
    }
    return precio;
}