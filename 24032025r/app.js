// inicializamos un arreglo para almacenar unas tareas
let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n"+
        "1. Agregar tarea\n"+
        "2. Ver las tareas \n"+
        "3. Marcar tarea como completada\n"+
        "4. Salir\n"+
        "Elige una opcion"

    ));
}
 //Funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Intruduce el nombre de la tarea");
    if(nombre){
        let tarea ={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("¡Tarea agregada exitosamente!");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver todas la tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No tenemos tareas en la lista");
    }else{
        let mensaje = "Lista de tareas\n";
        //Falta ver un tema
    }    
}
//Funcion para marcar una tarea como completada
function marcarTareaCompletada(){
    let numero= parseInt (prompt("Introduce el numero de la tarea que deseas marcar como completada"));
    if( numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert (`La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada.`);
    }else{
        alert("Numero de tarea invalido.")
    }
}

//Funcion principal para manejar el flujo de el programa

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
            let opcion = mostrarMenu();
            switch (opcion){
                case 1: 
                    agregarTarea();
                    break;
                case 2:
                    verTareas();
                    break;
                case 3:
                    marcarTareaCompletada();
                    break;
                case 4 :
                    alert("Saliendo del progrma");
                    continuar = false;
                    break;
                default:
                        alert ("Opcion  no válida. Intenta de nuevo");    
            } 
        }
    alert("Programa Finalizado.");
}

//Iniciar programa
iniciarPrograma();
