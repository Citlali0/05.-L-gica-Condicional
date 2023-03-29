var fahre;
var celc;

fahre =parseInt( prompt( "Ingresa la temperatura en grados Fahrenheit:"));

function conversion( fahre, celc){

    celc = ((fahre - 32)/1.8);

    return celc;
}

alert("La temperatura en grados Celsius es de: "+ conversion( fahre,celc)+ " °C");