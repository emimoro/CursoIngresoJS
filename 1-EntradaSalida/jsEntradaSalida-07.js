/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	 

	var numeroUno 

	var numeroDos 

	var suma 

	//SI YA ASIGNO NUMERO UNO Y NUMERO DOS, CUANDO QUIERA HACER EL PARSE ES A NUMERO UNO Y NUMERO DOS, YA QUE YA ESTAN ASIGNADOS. !!!!!!


	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;


	alert("la suma de los numeros es " + suma);


}

function restar()
{

	var numeroUno 

	var numeroDos 

	var resta

	//SI YA ASIGNO NUMERO UNO Y NUMERO DOS, CUANDO QUIERA HACER EL PARSE ES A NUMERO UNO Y NUMERO DOS, YA QUE YA ESTAN ASIGNADOS. !!!!!!


	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;

	alert("la resta seria " + resta)

	
}

function multiplicar()
{ 

	var numeroUno 

	var numeroDos 

	var multi

	//SI YA ASIGNO NUMERO UNO Y NUMERO DOS, CUANDO QUIERA HACER EL PARSE ES A NUMERO UNO Y NUMERO DOS, YA QUE YA ESTAN ASIGNADOS. !!!!!!


	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	multi = numeroUno * numeroDos;

	alert("la multiplicacion es " + multi);

	
}

function dividir()
{

	var numeroUno 

	var numeroDos 

	var divi

	//SI YA ASIGNO NUMERO UNO Y NUMERO DOS, CUANDO QUIERA HACER EL PARSE ES A NUMERO UNO Y NUMERO DOS, YA QUE YA ESTAN ASIGNADOS. !!!!!!


	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	divi = numeroUno / numeroDos;

	alert("La division es de " + divi);

	
}

