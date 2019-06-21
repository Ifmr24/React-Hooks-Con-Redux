// Acciones
export const ADD_COURSE = 'ADD_COURSE';
export const DEL_COURSE = 'DEL_COURSE';

/* 
    Estas son las funciones que importamos en los componentes
    Al importarlas les pasamos un objeto, en este caso solo un string
*/

export let addCourse = (title: string) => {
    // Retornamos el tipo de acction, y un objeto
    return {type: ADD_COURSE, title}
}

export let delCourse = (title: string) => {
    return {type: DEL_COURSE, title}
}