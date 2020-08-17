import { COURSES } from '../../data/model-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/courses'

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
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredCourses = state.courses.filter(course => {
                if (appliedFilters.framework && !course.isFrameWork){
                    return false;
                }
                if (appliedFilters.desktop && !course.isDesktop){
                    return false;
                }
                if (appliedFilters.mobile && !course.isMobile){
                    return false;
                }
                if (appliedFilters.web && !course.isWeb){
                    return false;
                }
                return true;
            });
            return{ ...state, filteredCourses: updatedFilteredCourses};
        default:
            return state;
    }
}

export default coursesReducer;