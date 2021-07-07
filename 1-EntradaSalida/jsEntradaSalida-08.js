/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var numeroDividendo 

	var numeroDivisor

	var rest

	//SI YA ASIGNO NUMERO UNO Y NUMERO DOS, CUANDO QUIERA HACER EL PARSE ES A NUMERO UNO Y NUMERO DOS, YA QUE YA ESTAN ASIGNADOS. !!!!!!


	numeroDividendo = txtIdNumeroDividendo.value;

	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividendo = parseInt(numeroDividendo);

	numeroDivisor = parseInt(numeroDivisor);

	rest = numeroDividendo % numeroDivisor;

	alert("el resto es " + rest);
	
}
