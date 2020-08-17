export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';


export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, courseId: id  };
}

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};
// {
//     frameWork: true,
//     mobile: 
//     web:
//     desktop:
// }