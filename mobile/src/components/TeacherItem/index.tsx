import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { styles } from './style';
import { RectButton } from 'react-native-gesture-handler';
import HeartOutlineBlankSVG from '../../assets/images/icons/heart-outline-blank.svg';
import WhatsappIconSVG from '../../assets/images/icons/whatsapp.svg';
import UnfavoriteIconSVG from '../../assets/images/icons/unfavorite.svg'
import AsyncStorage from '@react-native-community/async-storage';


export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    coast: number,
    name: string,
    subject: string,
    whatsapp: string
  }
  
  interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
  }


export const TeacherItem : React.FC<TeacherItemProps> = ({teacher,favorited}) => {

    const  [isFavorited,setFavorited] = useState(favorited)

    async function handleToggleFavorite(){

        const favorites = await AsyncStorage.getItem('favorite_teachers');
        let favoritesArray : Teacher[] = [];
        
        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorited){
            favoritesArray = favoritesArray.filter((teacherSave,index) => {
                return teacherSave.id !== teacher.id;
            })
        
            setFavorited(false);

        } else {
            favoritesArray.push(teacher);
            setFavorited(true);
        }

        await AsyncStorage.setItem('favorite_teachers',JSON.stringify(favoritesArray)).catch(() => {
            setFavorited(!isFavorited);
        });
    }

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
             <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>{teacher.coast}</Text>
                </Text>  
                    <View style={styles.buttonsContainer}>
                        <RectButton onPress={handleToggleFavorite} style=
                            {[
                                styles.favoritebutton,
                                isFavorited ? styles.favored : {},
                            ]}>
                            {isFavorited ? <UnfavoriteIconSVG/> : <HeartOutlineBlankSVG/>}         
                        </RectButton>
                        <RectButton onPress={handleLinkToWhatsapp} style={styles.contactbutton}>
                            <WhatsappIconSVG/>
                            <Text style={styles.contactbuttonText}>Entrar em contato</Text>
                        </RectButton>
                    </View>              
             </View>       
        </View>
    )
}