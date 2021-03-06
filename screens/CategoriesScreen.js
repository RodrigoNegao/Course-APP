import React from 'react';
import {FlatList,
        StyleSheet,
    } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/model-data';
import HeaderButton from '../components/HeaderButton';
import CategotyGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';


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
            <FlatList style={styles.screen} data={CATEGORIES} 
            keyExtractor={(item,index) => item.id}
            renderItem={renderGridItem} 
            numColumns={2}
            />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Tecnologias', 
        headerLeft: () =>( <HeaderButtons
                        HeaderButtonComponent={HeaderButton}>
                            <Item title='Menu' 
                            iconName='ios-menu'
                            onPress={() => {
                                navData.navigation.toggleDrawer();
                            }}/>
                        </HeaderButtons> )
    }
};

const styles = StyleSheet.create({
    screen:{
        // flex:1,
        // justifyContent: 'center',
        // alignItems : 'center',
        backgroundColor: Colors.accentColor , // cor editado
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
