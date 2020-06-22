import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
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

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meus Favoritos', 
        headerLeft: () =>( <HeaderButtons
                                HeaderButtonComponent={HeaderButton}>
                                    <Item title='Menu' 
                                    iconName='ios-menu'
                                    onPress={() => {
                                        navData.navigation.toggleDrawer();
                                    }}/>
                                </HeaderButtons> )
    }
};

// const styles = StyleSheet.create({
//     screen:{
//         flex:1,
//         justifyContent: 'center',
//         alignItems : 'center',
//     },
// });

export default FavoritesScreen;