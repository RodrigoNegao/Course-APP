import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import CourseList from '../components/CourseList';
import DefaultText from '../components/DefaultText'
import { COURSES } from '../data/model-data';

const FavoritesScreen = props => {
    const favCourses = useSelector(state => state.courses.favoriteCourses)
    
    if (favCourses.length === 0 || !favCourses) {
        return <View style={styles.content}>
            <Text>Não existe Favorito no momento.Então comece a adicionar tocando na Estrela no Canto Superior Direito! </Text>
        </View>
    }

    return (
        <CourseList 
            listData={favCourses}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meus Favoritos', 
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
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
    },
});

export default FavoritesScreen;