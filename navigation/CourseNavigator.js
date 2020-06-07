import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import 'react-native-gesture-handler';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesCoursesScreen from '../screens/CategoryCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerTitleAlign: 'center',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
    headerTitle: 'A tela'
};

const CourseNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryCourse: { 
        screen: CategoriesCoursesScreen,
    },
    CourseDetail: CourseDetailScreen,
    Filters: FiltersScreen,
},{
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    CourseDetail: CourseDetailScreen
},{
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Course: {screen: CourseNavigator, 
        navigationOptions:{
            tabBarLabel:'Cursos',
            tabBarIcon: tabInfo => {
                return <AntDesign name='codesquareo'
                size={26} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator, 
        navigationOptions:{
            tabBarLabel:'Favoritos!',
            tabBarIcon: tabInfo => {
                return (<Ionicons name='ios-star'
                size={26} color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.accentColor
        } 
    }
};

const CourseFavTabNavigation = 
    Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }
    )  
    : createBottomTabNavigator(
        tabScreenConfig , {
        tabBarOptions:{
        activeTintColor: Colors.accentColor
        }
    }
);

export default createAppContainer(CourseFavTabNavigation);
