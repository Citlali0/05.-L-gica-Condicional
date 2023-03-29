function tarea(){
    let respuesta = prompt("¿Hiciste la tarea?");
    if (respuesta == "si"){
        alert("¡Bien hecho!");
    } else if (respuesta == "no"){
        alert("No te rindas, ¡empieza ya mismo!");
    } else {
        alert("Intente de nuevo");
    }
}
tarea();
