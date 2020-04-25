import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

const CategoryCoursesScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId );

    return (
        <View style={styles.screen}>
            <Text>The Category Course Screen</Text>
            <Text>{ selectedCategory.title }</Text>
            <Button title="Go to Detail" 
            onPress={ () => { props.navigation.navigate('CourseDetail'); } } />
            <Button title="Back " 
            onPress={ () => { props.navigation.goBack(); } } />
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