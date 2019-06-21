import { ADD_COURSE, DEL_COURSE } from './actions';

let INITIAL_STATE = {
    data: [
        'React',
        'NextJS',
        'Gatsby',
        'Javascript'
    ]
}

// Recibe una accion y un objeto, en este caso un string en la variable title.
export let courses = (state = INITIAL_STATE, action: { type: any; title: any; }) => {
    switch (action.type) {
        case ADD_COURSE:
            return { ...state, data: [...state.data, action.title] }
        case DEL_COURSE:
            const array = state.data
            const index = array.indexOf(action.title)

            if (index > -1) {
                array.splice(index, 1)
            }
            return { ...state, data: [...state.data] }
        default:
            return state;
    }
}