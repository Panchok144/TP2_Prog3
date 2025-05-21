const ladoA = document.getElementById("lado1");
const ladoB = document.getElementById("lado2");
const ladoC = document.getElementById("lado3");
const resultado = document.getElementById("area");
const boton = document.getElementById("calcular");

boton.addEventListener("click", function() {

    let lado_A = parseFloat(ladoA.value);
    let lado_B = parseFloat(ladoB.value);
    let lado_C = parseFloat(ladoC.value);

    if (lado_A <= 0 || lado_B <= 0 || lado_C <= 0) {

        alert("ERROR: Ingrese valores validos");
        return;

    }else if (isNaN(lado_A) || isNaN(lado_B) || isNaN(lado_C)) {
        
        alert("ERROR: Ingrese valores validos");
        return;

    }else if (lado_C > lado_A){

        alert("ERROR: El lado C no puede ser mayor que el lado A");
        return;

    }else{
      
       let axel = (lado_A - lado_C) * lado_B / 2;

       let nuevaarea = (lado_A * lado_B) - axel;

       resultado.textContent = nuevaarea.toFixed(2);
       
       return;
        
    }
})
