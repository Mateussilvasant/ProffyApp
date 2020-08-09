import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import LandingSvg from '../../assets/images/landing.svg';
import {RectButton} from 'react-native-gesture-handler'
import GiveClassesSvg from '../../assets/images/icons/give-classes.svg';
import StudySvg from '../../assets/images/icons/study.svg';
import HeartSvg from '../../assets/images/icons/heart.svg';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';



export function Landing() {

    const {navigate} = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
      api.get("connections").then(response => {
        const { total } = response.data;
  
        setTotalConnections(total);
      })
    }, [])
  

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigate('Study');
    }

    return (

        <View style={styles.container}>
            <LandingSvg width="100%" />
            <Text style={styles.title}>Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <StudySvg width="40%" height="40%" />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <GiveClassesSvg width="40%" height="40%" />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões realizadas {' '} <HeartSvg  />
            </Text>

        </View>


    );
}