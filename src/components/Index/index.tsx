import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addCourse, delCourse} from '../../store/actions';

export interface IndexProps{

}

const Index: React.FC<IndexProps> = (props) => {
    const courses = useSelector((state:any[any]) => state.data);
    const dispatch = useDispatch();

    return ( 
        <div>
            <ul>
                {courses.map((course: any) => (
                    <li key={course}>
                        {course}
                        <button onClick={() => dispatch(delCourse(course))}>Borrar</button>
                    </li>
                ))}
                <button onClick={() => dispatch(addCourse('GraphQL'))}>
                    Agregar GraphQL
                </button>
            </ul>
        </div>
    );
}
 
export default Index;
