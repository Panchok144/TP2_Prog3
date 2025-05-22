const boton = document.getElementById("enviar");
const mostrarDatos = document.getElementById("mostrar");

boton.addEventListener("click", function () { 

   const nombre = document.getElementById("nombre").value;
   const apellido = document.getElementById("apellido").value;
   const edad = document.getElementById("edad").value;
   const altura = document.getElementById("altura").value;
   const correo = document.getElementById("correo").value;

   /*
   const mostrar = `
   <h1>Datos Ingresados</h1>
   <p>Nombre: ${nombre.value}</p>
   <p>Apellido: ${apellido.value}</p>
   <p>Edad: ${edad.value}</p>
   <p>Altura: ${altura.value}</p>
   <p>Correo: ${correo.value}</p>
   `;
   */

    let validaciones = "" ;
    let validar = true;

  if (nombre === "" || nombre.length > 50 || apellido === "" || apellido.length > 50) {
      validar = false;
      
   } else if (isNaN(edad) || edad < 0 || edad < 18) {
    validar = false;
      
   } else if (isNaN(altura) || altura < 0 || altura > 230) {
       validar = false;
    
   } else if (correo === "" || !correo.includes("@")) {
        validar = false;
   }

    validaciones = `
    <p>El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.</p>
    <p>La edad no debe ser negativa y no debe ser menor de edad.</p>
    <p>La altura no puede ser negativa y no puede ser mayor a 230 cm.</p>
    <p>El correo no puede estar vacío y debe contener un @.</p>
   `;


    
    if (validar) {

        mostrarDatos.innerHTML = validaciones;
        mostrarDatos.className = "bien";

    }else{

       mostrarDatos.innerHTML = validaciones;
        mostrarDatos.className = "error";
     }
})