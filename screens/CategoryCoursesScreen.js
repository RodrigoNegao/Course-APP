import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';

const CategoryCoursesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Course Screen</Text>
            <Button title="Go to Detail" 
            onPress={ () => { props.navigation.navigate('CourseDetail'); } } />
            <Button title="Back " 
            onPress={ () => { props.navigation.goBack(); } } />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});

export default CategoryCoursesScreen;