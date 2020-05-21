import React from 'react';
import {View, FlatList, Text, StyleSheet } from 'react-native';

import { CATEGORIES, COURSES } from '../data/model-data';
import CourseItem from '../components/CourseItem';

const CategoryCoursesScreen = props => {

    const renderCourseItem = itemData => {
        return(
            <CourseItem title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectCourse={() => {
                props.navigation.navigate('CourseDetail',{
                    courseId: itemData.item.id
                });
            }}/>
        );
    };
    const catId = props.navigation.getParam('categoryId');    

    const displayedCourse = COURSES.filter(
        course => course.categoryIds.indexOf(catId) >= 0 
    );

    return (
        <View style={styles.screen}>
            <FlatList 
            data={displayedCourse} 
            keyExtractor={(item, index) => item.id}
            renderItem={renderCourseItem}
            style={{width:'90%'}}/>
        </View>
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
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});

export default CategoryCoursesScreen;

//const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

{/* <Text>The Category Course Screen</Text>
            <Text>{ selectedCategory.title }</Text>
            <Button title="Go to Detail" 
            onPress={ () => { props.navigation.navigate('CourseDetail'); } } />
            <Button title="Back " 
            onPress={ () => { props.navigation.goBack(); } } /> */}