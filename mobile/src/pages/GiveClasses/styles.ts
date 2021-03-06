import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container :{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    backgroundContent :{
        flex: 1,
        justifyContent: "flex-start",
    },

    content : {
        flex: 1,
        justifyContent: "center",
    },

    title :{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 32,
        maxWidth: 180
    },

    description : {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    }, 

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8 
    },
    
    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
});