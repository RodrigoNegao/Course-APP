import React from 'react';
import {View, 
        Button,
        FlatList,
        Text,
        StyleSheet,
        TouchableOpacity,
        Platform
    } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'; 


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem}
            onPress={() => {
            props.navigation.navigate('CategoryCourse', { 
                categoryId: itemData.item.id
                });}}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
     );
    };

    return (
            <FlatList data={CATEGORIES} 
            keyExtractor={(item,index) => item.id}
            renderItem={renderGridItem} 
            numColumns={2}/>
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
    gridItem:{
        flex:1,
        margin:15,
        height:150,
    }
});


export default CategoriesScreen;

// console.log(props);

// headerTitleStyle: { alignSelf: 'center' },,

{/* <View style={styles.screen}>
<Text>The Categories Screen</Text>
<Button title="Go to Courses" 
onPress={ () => { props.navigation.navigate('CategoryCourse'); } } />
</View> */}
