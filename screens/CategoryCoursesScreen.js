import React from 'react';

import { CATEGORIES, COURSES } from '../data/model-data';
import CourseList from '../components/CourseList';

const CategoryCoursesScreen = props => {

    const catId = props.navigation.getParam('categoryId');    

    const displayedCourse = COURSES.filter(
        course => course.categoryIds.indexOf(catId) >= 0 
    );

    return (
        <CourseList 
        listData={displayedCourse}
        navigation={props.navigation}
        />

    );
};

CategoryCoursesScreen.navigationOptions = navigationData => {
    //console.log(navigationData);

    const catId = navigationData.navigation.getParam('categoryId');
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

    return {
        headerTitle: selectedCategory.title ,
    };
};

export default CategoryCoursesScreen;