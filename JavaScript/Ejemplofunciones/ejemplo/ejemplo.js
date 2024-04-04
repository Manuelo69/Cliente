function aplicar_IVA(){
    var valorProducto = parseFloat(prompt(`Introduce el valor del producto`));
    var IVA = parseFloat(prompt(`Introduce el valor del IVA`));
    var productoConIVA = valorProducto * IVA;
    alert(`El precio del producto, aplicando el IVA
    del ${IVA} es: ${productoConIVA}`);
    }

    aplicar_IVA();