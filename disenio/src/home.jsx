import React, { useContext, useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    PixelRatio,
    StatusBar,
    SafeAreaView
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; import { Buttonfloat } from './buttonfloat';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomHistorial } from './BottomHistorial'
import { BottomHistorialAdd } from './BottomHistorialAdd'

const { height, width } = Dimensions.get('window');

var FONT_BACK_LABEL = 18;
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

if (PixelRatio.get() <= 2) {
    FONT_BACK_LABEL = 14;
}

export const Home = () => {


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

    return (
        <View style={style.fondo}>
            <View style={style.backgroundContainer}>
                <View style={style.fondo5}>
                    <Text style={style.titulo}>Historial de Chester</Text>
                </View>

                <View style={style.fondo3}>

                    <StatusBar barStyle='dark-content'></StatusBar>
                    <SafeAreaView >
                        <TouchableWithoutFeedback onPress={onShowPopup}>

                            <View style={style.contenedorCaract}>
                                <View style={style.caracte}>
                                    <View style={style.iconCaracte}>
                                        <Image style={style.imgIcon2}

                                            source={require('../assets/alerta.png')}
                                        />
                                    </View>
                                    <View style={style.iconCaracte2}>
                                        <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> No olvidar</Text>
                                        <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Vacuna de la sextuple</Text>
                                    </View>
                                    <View style={style.iconCaracte3}>
                                        <Text style={{ fontWeight: "bold", color: "orange", fontSize: width * 0.03 }}> 01/01/2023</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                    <BottomHistorialAdd
                        title='Vacuna de la sextuple'
                        estado='Adoptado'
                        src={require('../assets/vacuna.png')}
                        ref={(target) => popupRef = target}
                        onTouchOutside={onClosePopup}
                        data={popupList}
                    />


                </View>

                <View style={style.fondo3}>

                    <StatusBar barStyle='dark-content'></StatusBar>
                    <SafeAreaView >
                        <TouchableWithoutFeedback onPress={onShowPopup3}>

                            <View style={style.contenedorCaract}>
                                <View style={style.caracte}>
                                    <View style={style.iconCaracte}>
                                        <Image style={style.imgIcon2}

                                            source={require('../assets/alerta.png')}
                                        />
                                    </View>
                                    <View style={style.iconCaracte2}>
                                        <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> No olvidar</Text>
                                        <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Vacuna de la rabia</Text>
                                    </View>
                                    <View style={style.iconCaracte3}>
                                        <Text style={{ fontWeight: "bold", color: "orange", fontSize: width * 0.03 }}> 01/01/2023</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                    <BottomHistorialAdd
                        title='Vacuna de la rabia'
                        estado='Adoptado'
                        src={require('../assets/vacuna.png')}
                        
                        ref={(target) => popupRef3 = target}
                        onTouchOutside={onClosePopup3}
                        data={popupList}
                    />


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
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> Esterelizado</Text>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Image style={style.imgIcon4}
                                            source={require('../assets/check.png')}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <StatusBar barStyle='dark-content'></StatusBar>
                                <SafeAreaView >
                                    <TouchableWithoutFeedback onPress={onShowPopup6}>

                                        <Text style={{ fontWeight: "bold", color: "blue", fontSize: width * 0.03 }}> Ver más</Text>
                                    </TouchableWithoutFeedback>
                                </SafeAreaView>
                                <BottomHistorial
                                    title='Desparacitado'
                                    estado='Adoptado'
                                    verificado={require('../assets/check.png')}
                                    src={require('../assets/tijeras.png')}
                                    ref={(target) => popupRef6 = target}
                                    onTouchOutside={onClosePopup6}
                                    data={popupList}
                                />

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
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> Desparacitado</Text>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Image style={style.imgIcon4}
                                            source={require('../assets/check.png')}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <StatusBar barStyle='dark-content'></StatusBar>
                                <SafeAreaView >
                                    <TouchableWithoutFeedback onPress={onShowPopup5}>

                                        <Text style={{ fontWeight: "bold", color: "blue", fontSize: width * 0.03 }}> Ver más</Text>
                                    </TouchableWithoutFeedback>
                                </SafeAreaView>
                                <BottomHistorial
                                    title='Desparacitado'
                                    estado='Adoptado'
                                    verificado={require('../assets/check.png')}
                                    src={require('../assets/medicina.png')}
                                    ref={(target) => popupRef5 = target}
                                    onTouchOutside={onClosePopup5}
                                    data={popupList}
                                />

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
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> Sextuple</Text>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Image style={style.imgIcon4}
                                            source={require('../assets/check.png')}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <StatusBar barStyle='dark-content'></StatusBar>
                                <SafeAreaView >
                                    <TouchableWithoutFeedback onPress={onShowPopup2}>

                                        <Text style={{ fontWeight: "bold", color: "blue", fontSize: width * 0.03 }}> Ver más</Text>
                                    </TouchableWithoutFeedback>
                                </SafeAreaView>
                                <BottomHistorial
                                    title='Sextuple'
                                    estado='Adoptado'
                                    verificado={require('../assets/check.png')}
                                    src={require('../assets/vacuna.png')}
                                    ref={(target) => popupRef2 = target}
                                    onTouchOutside={onClosePopup2}
                                    data={popupList}
                                />

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
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: width * 0.035, margin: '1%' }}> Rabia</Text>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Image style={style.imgIcon4}
                                            source={require('../assets/nocheck.png')}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Fecha: 01/01/2023</Text>
                                <Text style={{ fontSize: width * 0.03, margin: '1%' }}> Lugar: Clínica Pet</Text>
                            </View>
                            <View style={style.iconCaracte6}>
                                <StatusBar barStyle='dark-content'></StatusBar>
                                <SafeAreaView >
                                    <TouchableWithoutFeedback onPress={onShowPopup4}>

                                        <Text style={{ fontWeight: "bold", color: "blue", fontSize: width * 0.03 }}> Ver más</Text>
                                    </TouchableWithoutFeedback>
                                </SafeAreaView>
                                <BottomHistorial
                                    title='Rabia'
                                    estado='Adoptado'
                                    verificado={require('../assets/nocheck.png')}
                                    src={require('../assets/vacuna.png')}
                                    ref={(target) => popupRef4 = target}
                                    onTouchOutside={onClosePopup4}
                                    data={popupList}
                                />

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
        backgroundColor: 'white',
        alignItems: 'center',
        height: height
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
        width: width * 0.85,
        height: width * 0.15,
        elevation: 5,
        marginTop: '3%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
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
        margin: '3%',

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
        width: width * 0.35,
        height: width * 0.10,
        borderRadius: width * 0.25,
        flexDirection: "row"
    },
    iconCaracte: {
        width: width * 0.10,
        backgroundColor: 'red',
        borderRadius: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    iconCaracte4: {
        backgroundColor: '#5FAFB9',
        width: width * 0.10,
        borderRadius: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%'
    },
    iconCaracte2: {
        width: '90%',
        height: '50%',
        //alignItems: 'left',
        marginLeft: '4%'

    },
    iconCaracte3: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconCaracte5: {
        width: '90%',
        height: '50%',
        //alignItems: 'left',
        marginLeft: '2%'

    },
    iconCaracte6: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: '12%'
    },
    imgIcon2: {
        padding: 10,
        height: width * 0.07,
        width: width * 0.07,
        resizeMode: 'stretch'
    },
    imgIcon3: {
        padding: 10,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },
    imgIcon4: {
        height: width * 0.03,
        width: width * 0.03,
        resizeMode: 'stretch'
    },
    iconCaracte7: {
        backgroundColor: 'green',
        width: width * 0.05,
        borderRadius: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%'
    }
});



