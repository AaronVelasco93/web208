let  inventario = [];

//Funcion para menu
function mostrarMenu(){
    return parseInt( prompt (
        "Opciones diponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar prodcutos \n"+
        "3. Buscar producto por nombre \n"+
        "4. salir"+
        "Elije una opcion"

    ));
}



function inicarPrograma(){
    let continuar= true;
    while (continuar){
        let opcion = mostrarMenu();
        switch ( opcion){
            case 1:
                agregarProducto();
                break;
            case 2: 
                mostrarProducto();
                break;
            case 3:
                buscarProdcuto();
                break;
            case 4:
                alert("Saliendo del programa ....");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
        }
    }
    alert("Programa Finalizado");

}
