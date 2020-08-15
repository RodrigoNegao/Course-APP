import React, { useState, useEffect, useCallback } from 'react';
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
    const { navigation } = props;

    const [isFrameWork, setIsFrameWork] = useState (false);
    const [isDesktop, setIsDesktop] = useState (false);
    const [isMobile, setIsMobile] = useState (false);
    const [isWeb, setIsWeb] = useState (false);

    const saveFilters = useCallback(() => {
        const appliedFilders = {
             framework: isFrameWork,
             desktop: isDesktop,
             mobile: isMobile,
             web: isWeb,
        };

        console.log(appliedFilders);
    }, [isFrameWork,isDesktop,isMobile,isWeb]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Tipos de Filtro </Text>
            <FilterSwith label='FrameWork' 
                         state={isFrameWork}
                         onChange={newValue => setIsFrameWork(newValue)}
            />
            <FilterSwith label='Desktop' 
                         state={isDesktop}
                         onChange={newValue => setIsDesktop(newValue)}
            />
            <FilterSwith label='Mobile' 
                         state={isMobile}
                         onChange={newValue => setIsMobile(newValue)}
            />
            <FilterSwith label='Web' 
                         state={isWeb}
                         onChange={newValue => setIsWeb(newValue)}
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
                                </HeaderButtons> 
            ),
        headerRight: () =>( <HeaderButtons
            HeaderButtonComponent={HeaderButton}>
                <Item title='Save' 
                iconName='ios-save'
                onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons> 
        ),
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
                //         value={isFrameWork} 
                //         onValueChange={newValue => setIsFrameWork(newValue)}
                //  />