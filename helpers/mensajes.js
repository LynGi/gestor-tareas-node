
require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => { 

        console.clear();

        console.log('======================='.blue)
        console.log(' Selecciona una opción '.blue)
        console.log('=======================\n'.blue)

        console.log(`${ '1.'.blue } Crear nueva tarea`);
        console.log(`${ '2.'.blue } Ver mis tareas`);
        console.log(`${ '3.'.blue } Ver mis tareas pendientes`);
        console.log(`${ '4.'.blue } Ver mis tareas completadas`);
        console.log(`${ '5.'.blue } Completar tarea(s)`);
        console.log(`${ '6.'.blue } Borrar tarea(s)`);
        console.log(`${ '0.'.blue } Salir \n`);


        const readline = require('readline').createInterface ({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Selecciona una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
}




const confirmacion = () => {

    return new Promise ( resolve => { 

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\n Presiona ${'ENTER'.blue } para continuar \n`, (opt) => {
            readline.close();
            resolve();
        })

    })
}

module.exports = {
    mostrarMenu,
    confirmacion
}


