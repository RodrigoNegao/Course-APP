import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
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
    Favorites: FavoritesScreen,
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

export default createAppContainer(CourseNavigator);
