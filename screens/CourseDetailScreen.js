import React from 'react';
import { ScrollView, 
         Image,
         View,
         Button,
         Text,
         StyleSheet 
        } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { COURSES } from '../data/model-data';
import HeaderButton from '../components/HeaderButton'; 
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return ( <View style={styles.listItem}>
                <DefaultText>{props.children}</DefaultText>
                </View> )
};

const CourseDetailScreen = props => {
    const courseId = props.navigation.getParam('courseId');

    const selectedCourse = COURSES.find(course => course.id === courseId);
    
    return (
        <ScrollView>
            <Image source={{uri: selectedCourse.imageUrl}} 
            style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedCourse.duration}m</DefaultText>
                <DefaultText>{selectedCourse.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedCourse.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>In Detalhes</Text>
                {selectedCourse.ingredients.map(ingredient => 
                    (<ListItem key={ingredient}>{ingredient}</ListItem>))}
            <Text style={styles.title}>Etapas</Text>
                {selectedCourse.steps.map(step => 
                        (<ListItem key={step}>{step}</ListItem>))}
            
        </ScrollView>
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
    image:{
        width: '100%',
        height: 200,
    },
    details:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign:'center'
    },
    listItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor:'#ccc',
        borderWidth: 1,
        padding:10
    }
});

export default CourseDetailScreen;

{/* <View style={styles.screen}>
                <Text>{selectedCourse.title}</Text>
                <Button title="Back to TOP" 
                    onPress={ () => { props.navigation.popToTop(); 
                    } }
                 />
            </View> */}