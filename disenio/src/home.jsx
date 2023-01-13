import React, { useContext, useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Keyboard,
    Image,
    Dimensions,
    PixelRatio
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; import { Buttonfloat } from './buttonfloat';
import { StackScreenProps } from '@react-navigation/stack';

const {height,width}= Dimensions.get('window');

var FONT_BACK_LABEL   = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

export const Home = () => {
    return (
        <View style={style.fondo}>
            <View style={style.backgroundContainer}>
            <View style={style.fondo5}>
                <Text style={style.titulo}>Historial de Chester</Text>
            </View>
                
                <View style={style.fondo3}>
                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte}>
                                <Image style={style.imgIcon2}

                                    source={require('../assets/alerta.png')}
                                />
                            </View>
                            <View style={style.iconCaracte2}>
                                <Text style={{ fontWeight: "bold", fontSize:width*0.035,margin: '1%'}}> No olvidar</Text>
                                <Text style={{  fontSize:width*0.03,margin: '1%'}}> Vacuna de la rabia</Text>
                            </View>
                            <View style={style.iconCaracte3}>
                                <Text style={{ fontWeight: "bold", color: "orange", fontSize:width*0.03}}> 01/01/2023</Text>
                            </View>
                        </View>

                    </View>



                </View>
                <View style={style.fondo4}>
                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2}

                                    source={require('../assets/tijeras.png')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize:width*0.035,margin: '1%' }}> Desparacitado</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <Text style={{ fontWeight: "bold", color: "blue", fontSize:width*0.03 }}> Ver más</Text>
                            </View>
                        </View>

                    </View>

                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2}

                                    source={require('../assets/medicina.png')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize:width*0.035,margin: '1%' }}> Desparacitado</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%'  }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%'  }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <Text style={{ fontWeight: "bold", color: "blue", fontSize:width*0.03 }}> Ver más</Text>
                            </View>
                        </View>

                    </View>

                </View>
                <Text style={style.titulo2}> Vacunas</Text>
                <View style={style.fondo6}>
                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2}

                                    source={require('../assets/vacuna.png')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize:width*0.035,margin: '1%' }}> Desparacitado</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{fontSize:width*0.03,margin: '1%'}}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <Text style={{ fontWeight: "bold", color: "blue", fontSize:width*0.03 }}> Ver más</Text>
                            </View>
                        </View>

                    </View>

                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2}

                                    source={require('../assets/vacuna.png')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize:width*0.035,margin: '1%'}}> Desparacitado</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize:width*0.03,margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <Text style={{ fontWeight: "bold", color: "blue", fontSize:width*0.03 }}> Ver más</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    sesion: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
    titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:width*0.07,
        marginTop: '6%'
    },
    titulo2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:width*0.04,
        marginTop: '6%'
    },
    estadoMascota: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 13,
        margin: 5
    },
    descripcionMascota: {
        margin: 5
    },
    fondo: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fondo2: {
        backgroundColor: '#fff',
        width: '100%',
        height: '20%',
        overflow: "hidden",
        justifyContent: 'center',
        position: 'relative',
        top: -170
    },
    fondo3: {
        position: 'relative',
        width: width*0.85,
        height: width*0.15,
        elevation: 5,
        marginTop:'3%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    fondo4: {
        position: 'relative',
        width: width*0.85,
        height: width*0.35,
        elevation: 5,
        marginTop:'10%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    fondo5: {
        marginLeft: '0.5%'
    },
    fondo6: {
        position: 'relative',
        width: width*0.85,
        height: width*0.35,
        elevation: 5,
        marginTop:'5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    contenedorCaract: {
        flexDirection: 'row',
        margin:'3%',
        
    },
    
    image: {
        width: 400,
        height: 400,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        overflow: "hidden",
        top: 0,
        marginBottom: '10%'
    },
    image2: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: '2%',
        marginBottom: '2%'
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
        marginLeft: '20%',
        marginRight: '20%',
        padding: 20,
        borderRadius: 10,
        marginTop: '2%'
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
    inputs: {
        marginBottom: '5%',
    },
    backgroundContainer: {
       
        bottom: 0,
        left: 0,
        right: 0
    },
    containerCarac: {
        margin: '3%',
        backgroundColor: '#F6F3F4',
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgIcon: {
        padding: 10,
        marginTop: 8,
        height: 15,
        width: 15,
        resizeMode: 'stretch'
    },
    editContenedor: {
        position: 'absolute',
        top: 2,
        left: 260,
    },
    caracte: {
        width: width*0.35,
        height: width*0.10,
        borderRadius: width*0.25,
        flexDirection: "row"
    },
    iconCaracte: {
        width: width*0.10,
        backgroundColor: 'red',
        borderRadius: width*0.25,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    iconCaracte4: {
        backgroundColor: '#5FAFB9',
        width: width*0.10,
        borderRadius: width*0.25,
        alignItems: 'center',
        justifyContent: 'center',
        top:'20%'
    },
    iconCaracte2: {
        width: '90%',
        height: '50%',
        alignItems: 'left',
        marginLeft:'4%'
        
    },
    iconCaracte3: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconCaracte5: {
        width: '90%',
        height: '50%',
        alignItems: 'left',
        marginLeft:'2%'
        
    },
    iconCaracte6: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top:'45%'
    },
    imgIcon2: {
        padding: 10,
        height: width*0.07,
        width: width*0.07,
        resizeMode: 'stretch'
    },
    imgIcon3: {
        padding: 10,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    }
});
