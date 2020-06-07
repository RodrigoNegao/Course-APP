import React from 'react';
import { View,FlatList,StyleSheet } from 'react-native';

import CourseItem from './CourseItem'; 

const CourseList = props => {

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
        alignItems : 'center',
    },
});

export default CourseList;