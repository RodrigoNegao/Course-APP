import { COURSES } from '../../data/model-data';
import { TOGGLE_FAVORITE } from '../actions/courses'

const initialState = {
    courses: COURSES,
    filteredCourses: COURSES,
    favoriteCourses: []
};

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteCourses.findIndex(course => course.id === action.courseId);
            if ( existingIndex >= 0){
                const updatedFavCourses = [...state.favoriteCourses]; 
                updatedFavCourses.splice(existingIndex,1);
                return { ...state, favoriteCourses: updatedFavCourses }; 
            } else {
                const course = state.courses.find(course => course.id === action.courseId);
                return { ...state, favoriteCourses: state.favoriteCourses.concat(course) }
            }
        default:
            return state;
    }
}

export default coursesReducer;