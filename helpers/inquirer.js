require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Crear nueva tarea`
            },
            {
                value: '2',
                name: `${'2.'.blue} Ver todas las tareas`
            },
            {
                value: '3',
                name: `${'3. Ver tareas pendientes'.red}`
            },
            {
                value: '4',
                name: `${'4. Ver tareas completadas'.green}`
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.blue} Salir`
            }

        ]
    }
]; // ver documentación de inquirer


const inquirerMenu = async() => {

    console.clear();
    console.log('======================='.rainbow)
    console.log('   GESTOR DE TAREAS   '.white)
    console.log(' Selecciona una opción '.blue)
    console.log('=======================\n'.rainbow)

    const { opcion } = await inquirer.prompt(preguntas); //es una promesa con un arreglo

    return opcion;
}



const pausa = async() => {
    
    const confirmacion = [
        {
            type: 'input',
            name: 'ENTER',
            message: `\n Presiona ${'ENTER'.blue } para continuar \n`
        }
    ];

    console.log('\n');
    await inquirer.prompt(confirmacion);
};



const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ){
                    return 'Por favor ingresa un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}


const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, index) => {

        const idx = `${index + 1}`.blue;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    choices.unshift ({
        value: '0',
        name: '0.'.blue + 'Volver'
    });

const preguntas = [

    {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }
]

    const { id } = await inquirer.prompt(preguntas); //es una promesa con un arreglo
    return id;
};


const confirmar = async( message ) => {

    const pregunta = [
        {
            type: 'confirm',  //funciona como booleano
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(pregunta); //es una promesa con un arreglo
    return ok;

}


const mostrarListaChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, index) => {

        const idx = `${index + 1}`.blue;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

const pregunta = [

    {
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }
]

    const { ids } = await inquirer.prompt(pregunta); //es una promesa con un arreglo
    return ids;
};



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListaChecklist
}

