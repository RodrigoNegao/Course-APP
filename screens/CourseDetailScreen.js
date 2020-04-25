import React from 'react';
import {View, Button , Text, StyleSheet } from 'react-native';

const CourseDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Detail Course Screen</Text>
            <Button title="Back to TOP" 
                onPress={ () => { props.navigation.popToTop(); } } />
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

export default CourseDetailScreen;