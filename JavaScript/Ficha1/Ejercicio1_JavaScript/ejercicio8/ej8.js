
        //pedimos numeros por teclado
        var num1 = parseInt(prompt(`Introduce el primer número`));
        var num2 = parseInt(prompt(`Introduce el segundo número`));
        //definimos la nota final
        if(isNan(num1)||isNan(num2)){
         alert(`Uno de los numeros no está con un formato válido`);
        } else if(num1>num2){
            alert(`La suma es ${$num1+$num2} y su resta es ${$num1-$num2} `);
        } else { 
            alert(`El producto es ${$num1*$num2} y su division es ${$num1/$num2}`);
        }
