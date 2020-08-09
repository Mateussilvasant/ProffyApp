import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TeacherList } from '../pages/TeacherList';
import { Favorites } from '../pages/Favorites';
import {Ionicons} from '@expo/vector-icons'
import GiveClassesOutlineSVG from '../assets/images/icons/give-classes-outline.svg';
import GiveClassesOutlineUnfocusedSVG from '../assets/images/icons/give-classes-outline-unfocused.svg';
import HeartOutlineUnfocusedSVG from '../assets/images/icons/heart-outline-unfocused.svg';
import HeartOutlineSVG from '../assets/images/icons/heart-outline.svg';


const { Navigator, Screen } = createBottomTabNavigator();

export function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
               style: {
                   elevation: 0,
                   shadowOpacity: 0,
                   height: 64,
               },
               tabStyle: {
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'center'
               },
               iconStyle: {
                   flex: 0,
                   width: 20,
                   height: 20
               },
               labelStyle: {
                   fontFamily: 'Archivo_700Bold',
                   fontSize: 13,
                   marginLeft: 16
               },
               inactiveBackgroundColor: '#fafafc',
               activeBackgroundColor: '#ebebf5',
               inactiveTintColor: '#c1bccc',
               activeTintColor: '#32264d'
            }}
        >
            <Screen options={{
                tabBarLabel: "Proffys",
                tabBarIcon: ({size,color,focused}) => {
                    return (            
                        focused ? <GiveClassesOutlineSVG /> : <GiveClassesOutlineUnfocusedSVG/>
                    );
                }
            }} name="TeacherList" component={TeacherList}/>
            <Screen options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color,size,focused}) => {
                    return (
                       focused ? <HeartOutlineSVG /> : <HeartOutlineUnfocusedSVG/>
                    );
                }
            }} name="Favorites" component={Favorites}/>
        </Navigator>
    );
}