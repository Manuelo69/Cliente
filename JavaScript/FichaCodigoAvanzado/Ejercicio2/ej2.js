
addEventListener("load", function () {
    boton.addEventListener("click", function () {
        if (!isNaN(num1.value) || !isNaN(num2.value) || !isNaN(num3.value) || !isNaN(num4.value)) {
            res.value = parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value) + parseFloat(num4.value);
        } else {
            alert(`Uno de los números introducidos no es válido`);
        }
    }, false);
}, false)
