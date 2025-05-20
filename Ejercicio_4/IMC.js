const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("imc");
const boton = document.getElementById("calcular");

boton.addEventListener("click", function() {
    
    
    let pesokg = parseFloat(peso.value);
    let alturamtrs = parseFloat(altura.value);
  

    if( pesokg <= 0 || alturamtrs <= 0) {
       
        alert("ERROR: Ingrese valores validos");
        return;
    }else {
        resultado.textContent = (pesokg / (alturamtrs * alturamtrs)).toFixed(2);
        alert("El IMC es: " + resultado.textContent);
    }
})

