/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;

	var aument;

	var resultado;

	sueldo = parseInt(txtIdSueldo.value);

	aument = sueldo * 0.10;

     resultado = sueldo + aument;


     document.getElementById('txtIdResultado').value = resultado; 


      }
