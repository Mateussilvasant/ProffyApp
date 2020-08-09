import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './style';
import { RectButton } from 'react-native-gesture-handler';
import HeartOutlineBlankSVG from '../../assets/images/icons/heart-outline-blank.svg';
import WhatsappIconSVG from '../../assets/images/icons/whatsapp.svg';
import UnfavoriteIconSVG from '../../assets/images/icons/unfavorite.svg'


export function TeacherItem() {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/26354464?s=460&u=47e7e207e0eda6904f2115979e5a14acef263a1e&v=4' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Mateus Silva</Text>
                    <Text style={styles.subject}>Mateus Silva</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Java developer, graduated in Computer Science from Universidade São Judas Tadeu (São Paulo). {'\n'} I develop games, software, applications using java language.
                    </Text>
             <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$20,00</Text>
                </Text>  
                    <View style={styles.buttonsContainer}>
                        <RectButton style={[styles.favoritebutton,styles.favored]}>
                            <UnfavoriteIconSVG/>
                        </RectButton>
                        <RectButton style={styles.contactbutton}>
                            <WhatsappIconSVG/>
                            <Text style={styles.contactbuttonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>              
             </View>       
        </View>
    )
}