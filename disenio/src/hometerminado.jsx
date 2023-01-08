import React, { useContext, useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Keyboard,
    Image
} from 'react-native';
import { Buttonfloat } from './buttonfloat';
import { StackScreenProps } from '@react-navigation/stack';

export const Home2 = () => {
    return (
        <View style={style.fondo}>
            <Image style={style.image}

                source={require('../assets/yoamo.jpg')}
                resizeMode={'contain'} />
            {//<Spinner visible={isLoading} />
            }

            <View style={style.fondo2}>

                <View style={style.fondo3}>
                    <View style={style.inputs}>
                        <TextInput
                            style={style.input}
                            placeholder='Correo'
                            adjustsFontSizeToFit
                        //onChangeText={text => setPassword(text)}
                        />

                        <TextInput
                            style={style.input}
                            placeholder='Contraseña'
                            adjustsFontSizeToFit
                            //onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                    </View>
                    <View style={style.boton}>
                        <Button
                            color={"#5FAFB9"}
                            margin={'2%'}
                            title="Iniciar Sesión"
                        />
                    </View>

                    <View style={style.container}>

                        <Image
                            style={style.tinyLogo}
                            source={require("../assets/face_Mesadetrabajo1.png")}
                        />
                        <Image
                            style={style.tinyLogo}
                            source={require("../assets/tweet_Mesadetrabajo1.png")}
                        />
                        <Image
                            style={style.tinyLogo}
                            source={require("../assets/insta_Mesadetrabajo1.png")}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                            <Text style={style.sesion}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>



            </View>
        </View>
    );
}

const style = StyleSheet.create({
    sesion: {
        color: '#5FAFB9',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    fondo: {
        backgroundColor: '#DF9F51',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fondo2: {
        backgroundColor: '#fff',
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: "hidden"
    },
    fondo3: {
        marginTop: '10%',
        marginBottom: '1%'
    },
    image: {
        //width: '50%',
        //height: '30%',
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: '25%',
        marginBottom: '10%'
    },
    input: {
        height: 45,
        margin: 10,
        marginLeft: '10%',
        marginRight: '10%',
        borderWidth: 1,
        fontFamily: "Arial",
        fontSize: '100%',
        borderRadius: 12,
        color: 'grey',
        borderColor: 'grey'
        },
    boton: {
        marginLeft: '10%',
        marginRight: '10%',
        padding: 20,
        borderRadius: 10,
        marginBottom: '5%',
        marginTop: '5%'
    },
    img: {
        width: '5%',
        height: '5%',
        overflow: "hidden"
    },
    contimg: {
        width: 50,
        height: 50
    },
    contimg2: {
        width: 50,
        height: 50,
        top: 100,
        left: 100
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '10%',
        marginTop: '10%'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
        marginTop: '3%'
    },
    inputs:{
        marginBottom: '5%',
        marginTop: '5%'
    }
});
