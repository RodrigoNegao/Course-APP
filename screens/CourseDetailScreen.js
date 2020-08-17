import React, { useEffect, useCallback } from 'react';
import { ScrollView, 
         Image,
         View,
         Text,
         StyleSheet 
        } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

//import { COURSES } from '../data/model-data';
import HeaderButton from '../components/HeaderButton'; 
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/courses'

const ListItem = props => {
    return ( <View style={styles.listItem}>
                <DefaultText>{props.children}</DefaultText>
                </View> )
};

const CourseDetailScreen = props => {
    const availableCourses = useSelector(state => state.courses.courses);
    
    const courseId = props.navigation.getParam('courseId');
    
    const currentCourseIsFavorite = useSelector(state => 
        state.courses.favoriteCourses.some(course => course.id === courseId));

    const selectedCourse = availableCourses.find(course => course.id === courseId);
    
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(courseId));
    },[dispatch, courseId]);

    useEffect(() => {
        //props.navigation.setParams({courseTitle: selectedCourse.title});
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentCourseIsFavorite});
    }, [currentCourseIsFavorite]);
 

    return (
        <ScrollView>
            <Image source={{uri: selectedCourse.imageUrl}} 
            style={styles.image} />
            <View style={styles.details}>
                <DefaultText>Dev em:{selectedCourse.yearCreate}</DefaultText>
                <DefaultText>SO:{selectedCourse.osystem.toUpperCase()}</DefaultText>
                <DefaultText>OpenSource:{selectedCourse.opensource.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Tecnologias:</Text>
                {selectedCourse.technologies.map(technology => 
                    (<ListItem key={technology}>{technology}</ListItem>))}
            <Text style={styles.title}>Empresas:</Text>
                {selectedCourse.companies.map(company => 
                        (<ListItem key={company}>{company}</ListItem>))}
            
        </ScrollView>
    );
};

CourseDetailScreen.navigationOptions = (navigationData) => {
    //const courseId = navigationData.navigation.getParam('courseId');
    const courseTitle = navigationData.navigation.getParam('courseTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');
    //const selectedCourse = COURSES.find(course => course.id === courseId);
    return{
        headerTitle: courseTitle,
        headerRight: () => (<HeaderButtons 
            HeaderButtonComponent={HeaderButton}> 
                <Item title='Favorite' 
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite}
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