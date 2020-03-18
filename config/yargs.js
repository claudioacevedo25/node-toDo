

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tares'
}


const argv = require('yargs')
                .command('crear','Crear un elemeto por hacer',{
                    descripcion
                })
                .command('actualizar', 'actualiza el estado completo de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borra una tarea', {
                    descripcion
                })
                .help()
                .argv;

                module.exports = {
                    argv
                }