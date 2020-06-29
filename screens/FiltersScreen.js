import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch , Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwith = props =>{
        return(
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                        trackColor={{true: Colors.primaryColor}}
                        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                        value={props.state} 
                        onValueChange={props.onChange}
                 />
            </View>
    );
};

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState (false);
    const [isLactoseFree, setIsLactoseFree] = useState (false);
    const [isVeganFree, setIsVeganFree] = useState (false);
    const [isVegetarianFree, setIsVegetarianFree] = useState (false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Tipos de Filtro/ Restrições </Text>
            <FilterSwith label='Gluten-free' 
                         state={isGlutenFree}
                         onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwith label='Lactose-free' 
                         state={isLactoseFree}
                         onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwith label='Vegan' 
                         state={isVeganFree}
                         onChange={newValue => setIsVeganFree(newValue)}
            />
            <FilterSwith label='Vegetarian' 
                         state={isVegetarianFree}
                         onChange={newValue => setIsVegetarianFree(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Cursos Filtrados', 
        headerLeft: () =>( <HeaderButtons
                                HeaderButtonComponent={HeaderButton}>
                                    <Item title='Menu' 
                                    iconName='ios-menu'
                                    onPress={() => {
                                        navData.navigation.toggleDrawer();
                                    }}/>
                                </HeaderButtons> )
    };
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        //justifyContent: 'center',
        alignItems : 'center',
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FiltersScreen;

                // <Switch 
                //         trackColor={{true: Colors.primaryColor}}
                //         thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                //         value={isGlutenFree} 
                //         onValueChange={newValue => setIsGlutenFree(newValue)}
                //  />