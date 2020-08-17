import React from 'react';
import { View,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES, COURSES } from '../data/model-data';
import CourseList from '../components/CourseList';
import DefaultText from '../components/DefaultText';

const CategoryCoursesScreen = props => {

    const catId = props.navigation.getParam('categoryId');    

    const availableCourses = useSelector( state => state.courses.filteredCourses);

    const displayedCourses = availableCourses.filter(
        course => course.categoryIds.indexOf(catId) >= 0 
    );

    if (displayedCourses.length === 0){
        return <View style={styles.content}>
        <DefaultText>Tecnologias não encontrada, cheque seus filtros.</DefaultText>
        </View>
    }

    return (
        <CourseList 
        listData={displayedCourses}
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

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});

export default CategoryCoursesScreen;