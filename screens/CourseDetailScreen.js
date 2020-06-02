import React from 'react';
import {View, Button , Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { COURSES } from '../data/model-data';
import HeaderButton from '../components/HeaderButton'; 

const CourseDetailScreen = props => {
    const courseId = props.navigation.getParam('courseId');

    const selectedCourse = COURSES.find(course => course.id === courseId);
    
    return (
        <View style={styles.screen}>
            <Text>{selectedCourse.title}</Text>
            <Button title="Back to TOP" 
                onPress={ () => { props.navigation.popToTop(); } } />
        </View>
    );
};

CourseDetailScreen.navigationOptions = (navigationData) => {
    const courseId = navigationData.navigation.getParam('courseId');
    const selectedCourse = COURSES.find(course => course.id === courseId);
    return{
        headerTitle: selectedCourse.title,
        headerRight: () => (<HeaderButtons 
            HeaderButtonComponent={HeaderButton}> 
                <Item title='Favorite' 
                    iconName='ios-star'
                    onPress={() => {
                    console.log ('Mark as favorite!');}
                    }
                />
             </HeaderButtons>
            )
    };
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});

export default CourseDetailScreen;