import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import CourseList from '../components/CourseList';
import { COURSES } from '../data/model-data';

const FavoritesScreen = props => {

    const favCourse = COURSES.filter(course => course.id === 'm1' || course.id === 'm2')
   
    return (
        <CourseList 
            listData={favCourse}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Meus Favoritos'
};

// const styles = StyleSheet.create({
//     screen:{
//         flex:1,
//         justifyContent: 'center',
//         alignItems : 'center',
//     },
// });

export default FavoritesScreen;