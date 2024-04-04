addEventListener("load", function () {
    Presupuesto.addEventListener("click", function () {
        if (!isNaN(m2.value)) {
        Total.value = m2.value*4/12;
        } else {
            alert(`Este número no es valido`);
        }
    }, false);
}, false)