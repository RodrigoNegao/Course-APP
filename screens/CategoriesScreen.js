import React from 'react';
import {View, 
        Button,
        FlatList,
        Text,
        StyleSheet,
        TouchableOpacity,
        Platform
    } from 'react-native';

import { CATEGORIES } from '../data/model-data';
import CategotyGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
           <CategotyGridTile 
           title={itemData.item.title}
           color={itemData.item.color} 
           onSelect={() => {
            props.navigation.navigate('CategoryCourse', { 
                categoryId: itemData.item.id
                });}}/>
        );
    };

    return (
            <FlatList data={CATEGORIES} 
            keyExtractor={(item,index) => item.id}
            renderItem={renderGridItem} 
            numColumns={2}
            />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Tipos de Cursos', 
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});


export default CategoriesScreen;

// console.log(props);

// headerTitleStyle: { alignSelf: 'center' },,

{/* <View style={styles.screen}>
<Text>The Categories Screen</Text>
<Button title="Go to Courses" 
onPress={ () => { props.navigation.navigate('CategoryCourse'); } } />
</View> */}
