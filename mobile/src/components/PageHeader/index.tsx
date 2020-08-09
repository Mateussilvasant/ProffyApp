import React from 'react';
import { View,Text } from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler'
import BackIconSVG from '../../assets/images/icons/back.svg' 
import LogoSVG from '../../assets/images/logo.svg' 
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title: string,
    childrenRight : React.ReactNode
}

export const PageHeader : React.FC<PageHeaderProps> = ({title, children,childrenRight}) =>{

    const {navigate} = useNavigation();

    function handleGoBack(){
        navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <BackIconSVG/>
                </BorderlessButton>
                <LogoSVG/>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {childrenRight}
            </View>
            {children}
        </View>
    );
}   