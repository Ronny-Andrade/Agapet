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
    PixelRatio,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; import { Buttonfloat } from './buttonfloat';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomPopup } from './BottomPopup'
import { BottomNotification } from './BottomNotification'
import { BottomPet } from './BottomPet'


const popupList = [
    {
        id: 1,
        name: 'Task'
    },
    {
        id: 2,
        name: 'Message'
    },
    {
        id: 3,
        name: 'Note'
    }
]

const { height, width } = Dimensions.get('window');

var FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
    FONT_BACK_LABEL = 14;
}

export const TimeLine = () => {

    let popupRef = React.createRef()
    const onShowPopup = () => {
        popupRef.show()
    }
    const onClosePopup = () => {
        popupRef.close()
    }

    let popupRef2 = React.createRef()
    const onShowPopup2 = () => {
        popupRef2.show()
    }
    const onClosePopup2 = () => {
        popupRef2.close()
    }

    let popupRef3 = React.createRef()
    const onShowPopup3 = () => {
        popupRef3.show()
    }
    const onClosePopup3 = () => {
        popupRef3.close()
    }

    let popupRef4 = React.createRef()
    const onShowPopup4 = () => {
        popupRef4.show()
    }
    const onClosePopup4 = () => {
        popupRef4.close()
    }

    let popupRef5 = React.createRef()
    const onShowPopup5 = () => {
        popupRef5.show()
    }
    const onClosePopup5 = () => {
        popupRef5.close()
    }

    let popupRef6 = React.createRef()
    const onShowPopup6 = () => {
        popupRef6.show()
    }
    const onClosePopup6 = () => {
        popupRef6.close()
    }

    let popupRef7 = React.createRef()
    const onShowPopup7 = () => {
        popupRef7.show()
    }
    const onClosePopup7 = () => {
        popupRef7.close()
    }

    let popupRef8 = React.createRef()
    const onShowPopup8 = () => {
        popupRef8.show()
    }
    const onClosePopup8 = () => {
        popupRef8.close()
    }




    return (
        <View style={style.fondo}>

            <View style={style.fondo3}>
                <View style={style.contenedorCaract}>
                    <View style={style.caracte}>
                        <View style={style.iconCaracte}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView >
                                <TouchableWithoutFeedback onPress={onShowPopup8}>

                                    <Image style={style.imgIcon2}

                                        source={require('../assets/fotomascota.jpg')}
                                    />
                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPet
                                title='Chester'
                                estado='Adoptado'
                                ref={(target) => popupRef8 = target}
                                onTouchOutside={onClosePopup8}
                                data={popupList}
                            />

                        </View>
                        <View style={style.iconCaracte2}>
                            <Text style={{ fontWeight: "bold", fontSize: width * 0.04, margin: '1%', color: 'white' }}> ¡Hola Chester!</Text>
                            <View style={{ flexDirection: "row", marginLeft: '2%', marginTop: '2%' }}>
                                <Image style={style.imgIcon5}

                                    source={require('../assets/coin.png')}
                                />
                                <Text style={{ fontSize: width * 0.03, marginTop: '2%', marginBottom: '2%', color: 'yellow' }}> 100 puntos</Text>
                            </View>
                        </View>
                        <View style={style.iconCaracte3}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup7}>

                                    <Image style={style.imgIcon6}

                                        source={require('../assets/notificacion.png')}
                                    />

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomNotification
                                title='¡Felicitaciones!'
                                estado='No iniciado'
                                ref={(target) => popupRef7 = target}
                                onTouchOutside={onClosePopup7}
                                data={popupList}
                            />

                        </View>
                    </View>

                </View>
            </View>

            <ScrollView style={style.scrollStyle} >
                <ImageBackground style={style.imgFondo} source={require('../assets/caminofase4aceptado.png')} >
                    <View style={{ width: '100%', marginTop: '10%' }}>
                        <View style={style.iconCaracte5d}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup6}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>

                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7}
                                                source={require('../assets/gatito.png')}
                                            />
                                        </View>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-left-bold'
                                            color='grey' />
                                        <Text style={{ color: 'grey', fontSize: width * 0.035, marginBottom: '1%' }}> Entrega de mascota</Text>

                                        <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingLeft: width * 0.1 }}>
                                            <Image style={style.imgIcon4}
                                                source={{/*require('../assets/check.png')*/ }}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Entrega de mascota'
                                estado='No iniciado'
                                src={require('../assets/gatito.png')}
                                ref={(target) => popupRef6 = target}
                                onTouchOutside={onClosePopup6}
                                data={popupList}
                            />
                        </View>


                        <View style={style.iconCaracte5i2}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup5}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: width * 0.035, marginBottom: '1%' }}> Firma de contrato</Text>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-right-bold'
                                            color='grey' />
                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7}
                                                source={require('../assets/acuerdo.png')}
                                            />
                                        </View>
                                        <View style={{ position: 'absolute', alignSelf: 'flex-end' }}>
                                            <Image style={style.imgIcon4}
                                                source={{/*require('../assets/check.png')*/ }}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Firma de contrato'
                                estado='No iniciado'
                                src={require('../assets/acuerdo.png')}
                                ref={(target) => popupRef5 = target}
                                onTouchOutside={onClosePopup5}
                                data={popupList}
                            />
                        </View>


                        <View style={style.iconCaracte5d}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup4}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>

                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7Actual}
                                                source={require('../assets/casa.png')}
                                            />
                                        </View>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-left-bold'
                                            color='gold' />
                                        <Text style={{ color: 'gold', fontWeight: "bold", fontSize: width * 0.035, marginBottom: '1%' }}> Segunda Visita</Text>

                                        <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingLeft: width * 0.1 }}>
                                            <Image style={style.imgIconActual}
                                                source={{/*require('../assets/check.png')*/ }}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Segunda Visita'
                                estado='En espera'
                                src={require('../assets/casa.png')}
                                ref={(target) => popupRef4 = target}
                                onTouchOutside={onClosePopup4}
                                data={popupList}
                            />
                        </View>



                        <View style={style.iconCaracte5i}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup3}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: width * 0.035, marginBottom: '1%' }}> Entrevista</Text>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-right-bold'
                                            color='grey' />
                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7}
                                                source={require('../assets/conversacion.png')}
                                            />
                                        </View>
                                        <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingLeft: width * 0.23 }}>
                                            <Image style={style.imgIcon4}
                                                source={require('../assets/check.png')}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Entrevista'
                                estado='Aprobado'
                                ref={(target) => popupRef3 = target}
                                src={require('../assets/conversacion.png')}
                                onTouchOutside={onClosePopup3}
                                data={popupList}
                            />
                        </View>


                        <View style={style.iconCaracte5d}>
                            <StatusBar barStyle='dark-content'></StatusBar>
                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup2}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>

                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7}
                                                source={require('../assets/casa.png')}
                                            />
                                        </View>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-left-bold'
                                            color='grey' />
                                        <Text style={{ color: 'grey', fontSize: width * 0.035, marginBottom: '1%' }}> Primera Visita</Text>

                                        <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingLeft: width * 0.1 }}>
                                            <Image style={style.imgIcon4}
                                                source={require('../assets/check.png')}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Primera Visita'
                                estado='Aprobado'
                                src={require('../assets/casa.png')}
                                ref={(target) => popupRef2 = target}
                                onTouchOutside={onClosePopup2}
                                data={popupList}
                            />
                        </View>

                        <View style={style.iconCaracte5i}>

                            <SafeAreaView style={style.container2}>
                                <TouchableWithoutFeedback onPress={onShowPopup}>

                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Text style={{ color: 'grey', fontSize: width * 0.035, marginBottom: '1%' }}> Formulario</Text>
                                        <Icon
                                            size={width * 0.05}
                                            name='arrow-right-bold'
                                            color='grey' />
                                        <View style={{ justifyContent: 'center' }}>
                                            <Image style={style.imgIcon7}
                                                source={require('../assets/formulario-de-consentimiento-del-donante.png')}
                                            />
                                        </View>
                                        <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingLeft: width * 0.23 }}>
                                            <Image style={style.imgIcon4}
                                                source={require('../assets/check.png')}
                                            />
                                        </View>
                                    </View>

                                </TouchableWithoutFeedback>
                            </SafeAreaView>
                            <BottomPopup
                                title='Formulario'
                                estado='Aprobado'
                                src={require('../assets/formulario-de-consentimiento-del-donante.png')}
                                ref={(target) => popupRef = target}
                                onTouchOutside={onClosePopup}
                                data={popupList}
                            />
                        </View>




                    </View>

                </ImageBackground>

            </ScrollView>

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
        fontSize: width * 0.07,
        marginTop: '6%'
    },
    titulo2: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.04,
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
        backgroundColor: 'white'

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
        width: width,
        height: width * 0.2,
        elevation: 10,
        backgroundColor: '#5FAFB9',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    fondo4: {
        position: 'relative',
        width: width * 0.85,
        height: width * 0.35,
        elevation: 5,
        marginTop: '10%',
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
        width: width * 0.85,
        height: width * 0.35,
        elevation: 5,
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    contenedorCaract: {
        flexDirection: 'row',
        margin: '3%'

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
        alignItems: 'center',
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
        width: width * 0.35,
        height: width * 0.10,
        borderRadius: width * 0.25,
        flexDirection: "row"
    },
    iconCaracte: {
        //width: width * 0.10,
        //height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.5,
        backgroundColor: 'red',
        marginTop: '8%',
        //borderRadius: width * 0.25,
        marginLeft: '10%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    iconCaracte4: {
        backgroundColor: '#5FAFB9',
        width: width * 0.10,
        borderRadius: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%'
    },
    iconCaracte2: {
        width: '90%',
        height: '50%',
        //alignItems: 'left',
        marginLeft: '4%'

    },
    iconCaracte3: {
        width: '100%',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        paddingLeft: '70%'
    },
    iconCaracte5d: {
        width: '90%',
        margin: '9%',
        paddingLeft: '9%'

    },
    iconCaracte5i: {
        width: '90%',
        margin: '9%',
        paddingLeft: '36%'

    },
    iconCaracte5i2: {
        width: '90%',
        margin: '9%',
        paddingLeft: '25%'

    },
    iconCaracte6: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: '45%'
    },
    imgIcon2: {

        height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.5
    },
    imgIcon3: {
        padding: 10,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },
    imgIcon4: {
        height: width * 0.06,
        width: width * 0.06,
        resizeMode: 'stretch',
        opacity: '90%'
    },
    imgIconActual: {
        height: width * 0.06,
        width: width * 0.06,
        resizeMode: 'stretch'
    },
    iconCaracte7: {
        backgroundColor: 'green',
        width: width * 0.05,
        borderRadius: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%'
    },
    imgIcon5: {
        height: width * 0.05,
        width: width * 0.05,
        alignSelf: 'flex-end'
    },
    imgIcon6: {

        height: width * 0.11,
        width: width * 0.11
    },
    imgIcon7: {
        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'contain',
        opacity: '60%'
    },
    imgIcon7Actual: {
        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'contain'
    },
    scrollStyle: {
        width: width,
        height: height * 0.9

    },
    imgFondo: {
        marginTop: '3%',
        width: width
    },
    container2: {
        width: '90%',
        height: '50%'
    },
    txtSize: {
        fontSize: 20
    }


});

export default TimeLine;