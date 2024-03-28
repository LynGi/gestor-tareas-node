require('colors');

const { inquirerMenu, 
        pausa, 
        leerInput ,
        listadoTareasBorrar,
        confirmar,
        mostrarListaChecklist
} = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./helpers/saveFile');
const Tareas = require('./models/tareas');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
      //Cargar las tareas
      tareas.cargarTareasFromArray( tareasDB );
    }


    do {

        opt = await inquirerMenu();
        
          switch (opt) {
            case '1':
              // crear tarea nueva
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
            break;

            case '2':
              tareas.listadoCompleto();  
            // console.log(tareas._listado);  
            break;

            case '3':
                tareas.listarPendientesCompletadas(false);
            break;

            case '4':
                tareas.listarPendientesCompletadas(true);
            break;

            case '5':
              const ids = await mostrarListaChecklist( tareas. listadoArr );
                tareas.toggleCompletadas(ids);

            break;

            case '6':
                const id = await listadoTareasBorrar( tareas. listadoArr );
                if ( id !== '0' ) {

                const ok = await confirmar('¿Estás seguro?');
                  if ( ok ) {
                    tareas.borrarTarea ( id );
                    console.log('Tarea borrada');
                  }
                }
            break;

          }

          guardarDB( tareas.listadoArr );

        await pausa();
      
      } while (opt !== '0');

}

main();

