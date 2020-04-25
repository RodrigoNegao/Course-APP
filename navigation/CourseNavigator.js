import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesCoursesScreen from '../screens/CategoryCoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const CourseNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryCourse: { 
        screen: CategoriesCoursesScreen,
    },
    CourseDetail: CourseDetailScreen,
    Favorites: FavoritesScreen,
    Filters: FiltersScreen,
});

export default createAppContainer(CourseNavigator);
