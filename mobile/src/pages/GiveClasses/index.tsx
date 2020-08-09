import React from 'react';
import { View, ImageBackground, Text } from 'react-native'
import { styles } from '../GiveClasses/styles';
import GiveClassesBgSvg from '../../assets/images/give-classes-background.svg';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function GiveClasses() {

    const {goBack} = useNavigation();

    function handleNavigateToLanding(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContent}>
                <GiveClassesBgSvg width="100%" heigth="100%" />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar
            como professor na nossa plataforma web.</Text>           
             </View>
            <RectButton onPress={handleNavigateToLanding} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}