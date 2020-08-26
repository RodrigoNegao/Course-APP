import React from 'react';
import { View,FlatList,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CourseItem from './CourseItem'; 

const CourseList = props => {
    const favoriteCourses = useSelector(state => state.courses.favoriteCourses);

    const renderCourseItem = itemData => {
        const isFavorite = favoriteCourses.some(course => course.id === itemData.item.id);

        return(
            <CourseItem title={itemData.item.title}
            image={itemData.item.imageUrl}
            yearCreate={itemData.item.yearCreate}
            osystem={itemData.item.osystem}
            opensource={itemData.item.opensource}
            onSelectCourse={() => {
                props.navigation.navigate(
                    'CourseDetail',{
                    courseId: itemData.item.id,
                    courseTitle: itemData.item.title,
                    isFav: isFavorite
                });
            }}/>
        );
    };

    return (<View style={styles.list}>
                <FlatList 
                data={props.listData} 
                keyExtractor={(item, index) => item.id}
                renderItem={renderCourseItem}
                style={{width:'90%'}}/>
            </View>
            );
};

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CourseList;