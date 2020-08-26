import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CourseNavigator from './navigation/CourseNavigator';
import coursesReducer from './store/reducers/courses';


enableScreens();

const rootReducer = combineReducers({
    courses: coursesReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const[dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded){
    return <AppLoading 
    startAsync={fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err)}
     />;
  };
  return (
    <Provider store={store}> 
        <CourseNavigator />
    </Provider> 
  );

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: Colors.accentColor, // '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fontText:{
//     fontFamily: 'open-sans-bold',
//     fontSize: 20,
//   },
// });


  // import 'react-native-gesture-handler';
  // (
  //   <View style={styles.container}>
  //     <Text style={styles.fontText}> Vamos criar um app de CURSO
  //     </Text>
  //   </View>
  // );