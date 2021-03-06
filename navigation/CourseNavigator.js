import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
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
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily: 'open-sans'
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

const CourseFavTabNavigator = 
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
        labelStyle: {
            fontFamily:'open-sans'
        },
        activeTintColor: Colors.accentColor
        }
    }
);

const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },{
        mode: 'modal',
        navigationOptions:{
                drawerLabel: 'Filtros'
        },
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator({
    CoursesFavs:{ 
        screen: CourseFavTabNavigator,
        navigationOptions:{
            drawerLabel: 'TECNOLOGIAS'
        }
    },
    Filters: FilterNavigator
},{
    contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily:'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);
