import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
// import 'react-native-gesture-handler';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesCoursesScreen from '../screens/CategoryCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const CourseNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryCourse: { 
        screen: CategoriesCoursesScreen,
    },
    CourseDetail: CourseDetailScreen,
    Filters: FiltersScreen,
},{
    mode: 'modal',
    defaultNavigationOptions: {
    headerTitleAlign: 'center',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor ,
    }
});

const CourseFavTabNavigation = createBottomTabNavigator({
    Course: {screen: CourseNavigator, 
        navigationOptions:{
        tabBarLabel:'Cursos',
        tabBarIcon: tabInfo => {
            return <AntDesign name='codesquareo'
             size={26} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {screen: FavoritesScreen, 
        navigationOptions:{
        tabBarLabel:'Favoritos!',
        tabBarIcon: tabInfo => {
            return (<Ionicons name='ios-star'
             size={26} color={tabInfo.tintColor} />
            );
            }
        } 
    }
}, {
        tabBarOptions:{
        activeTintColor: Colors.accentColor
        }
    }
);

export default createAppContainer(CourseFavTabNavigation);
