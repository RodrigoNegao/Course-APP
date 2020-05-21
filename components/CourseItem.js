import React from 'react';
import { View, 
         Text,
         StyleSheet,
         TouchableOpacity,
         ImageBackground } from 'react-native';

const CourseItem = props => {
    return (
        <View style={styles.courseItem}>
            <TouchableOpacity onPress={props.onSelectCourse}>
                <View>
                    <View style={{...styles.courseRow, ...styles.courseHeader}}>
                        <ImageBackground source={{uri: props.image}} 
                        style={styles.bgImages}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.courseRow, ...styles.courseDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    courseItem:{
        height: 200,
        width:'100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        overflow: 'hidden'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    bgImages:{
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',
    },
    courseRow:{
        flexDirection: 'row',
    },
    courseHeader:{
        height:'85%',
    },
    courseDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height:'15%',
    },    
});

export default CourseItem;

