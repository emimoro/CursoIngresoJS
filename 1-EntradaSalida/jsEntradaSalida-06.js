/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   var suma 

   var numeroUno = (txtIdNumeroUno).value;

   var numeroDos = (txtIdNumeroDos).value;
   
   numeroUno = parseInt(numeroUno);

   numeroDos = parseInt(numeroDos);
   
   suma = numeroUno + numeroDos;


	alert("La suma de los numeros es " + suma);




}

