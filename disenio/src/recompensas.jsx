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
//import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; import { Buttonfloat } from './buttonfloat';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomPopup } from './BottomPopup'
import { BottomNotification } from './BottomNotification'
import Searchbar from './Searchbar.js'


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

export const Recompensas = () => {

    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }



    let popupRef7 = React.createRef()
    const onShowPopup7 = () => {
        popupRef7.show()
    }
    const onClosePopup7 = () => {
        popupRef7.close()
    }





    return (
        <View style={style.fondo}>

            <View style={style.fondo3}>
                <View style={style.contenedorCaract}>
                    <View style={style.caracte}>
                        <View style={style.iconCaracte}>
                            <Image style={style.imgIcon2}

                                source={require('../assets/fotomascota.jpg')}
                            />

                        </View>
                        <View style={style.iconCaracte2}>
                            <Text style={{ fontWeight: "bold", fontSize: width * 0.045, color: 'white' }}> ¡Hola Chester!</Text>
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
            <Text style={{ fontSize: width * 0.065, margin: '2%', fontWeight: "bold" }}> Recompensas</Text>
            <View style={style.buscador}>

                <Searchbar
                    value={value}
                    updateSearch={updateSearch}
                />
            </View>
            <ScrollView style={style.scrollStyle} >
                <View style={style.fondo6}>


                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2v}

                                    source={require('../assets/recompensa.jpeg')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize: width * 0.036 }}> Adiestramiento Canino</Text>
                                <Text style={{ fontSize: width * 0.03 }}> Curso para perros</Text>
                                <Text style={{ fontSize: width * 0.03 }}> Precio: $30</Text>
                                <Text style={{ fontSize: width * 0.03, color: '#74c2d1' }}> Descuento: 100%</Text>
                            </View>
                            <View style={style.iconCaracte5v}>
                                <Text style={{ fontWeight: "bold", fontSize: width * 0.05 }}>100</Text>
                                <Text style={{ fontSize: width * 0.03 }}> pts</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={style.fondo6}>


                    <View style={style.contenedorCaract}>
                        <View style={style.caracte}>
                            <View style={style.iconCaracte4}>
                                <Image style={style.imgIcon2v}

                                    source={require('../assets/recompensa.jpeg')}
                                />
                            </View>
                            <View style={style.iconCaracte5}>
                                <Text style={{ fontWeight: "bold", fontSize: width * 0.035 }}> Adiestramiento Canino</Text>
                                <Text style={{ fontSize: width * 0.03 }}> Curso para perros</Text>
                                <Text style={{ fontSize: width * 0.03 }}> Precio: $30</Text>
                                <Text style={{ fontSize: width * 0.03, color: '#74c2d1' }}> Descuento: 100%</Text>
                            </View>
                            <View style={style.iconCaracte5v}>
                                <Text style={{ fontWeight: "bold", fontSize: width * 0.05 }}>100</Text>
                                <Text style={{ fontSize: width * 0.03 }}> pts</Text>
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

        </View>


    );
}

const style = StyleSheet.create({

    fondo: {
        backgroundColor: 'white'

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

    contenedorCaract: {
        flexDirection: 'row',
        margin: '3%'

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

    iconCaracte2: {
        height: '90%',
        //alignItems: 'left',
        marginLeft: '4%'

    },
    iconCaracte3: {
        width: '100%',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end',
        paddingLeft: '70%'
    },

    imgIcon2: {

        height: width * 0.15,
        width: width * 0.15,
        borderRadius: width * 0.5
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
    imgIcon7Actual: {
        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'contain'
    },
    scrollStyle: {
        width: width,
        height: height * 0.9

    },

    iconCaracte5: {
        width: width * 0.55,
        //alignItems: 'left',
        marginLeft: '5%'

    },
    iconCaracte5v: {
        //height: width,
        marginTop: '6%',
        alignItems: 'center',
        //marginLeft: '2%'

    },
    imgIcon4: {
        height: width * 0.03,
        width: width * 0.03,
        resizeMode: 'stretch'
    },
    iconCaracte4: {
        width: width * 0.15,
        //alignItems: 'center',
        //justifyContent: 'center',
        top: '5%',
    },
    imgIcon2v: {

        height: width * 0.15,
        width: width * 0.15,
        resizeMode: 'stretch',
        borderRadius: 10
    },
    fondo6: {
        position: 'relative',
        width: width * 0.9,
        height: height * 0.12,
        elevation: 5,
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        alignSelf: 'center',
        marginBottom: '1%'
    },
    buscador: {
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        margin: '2%',
        width: width * 0.9,
        height: width * 0.12,
        borderRadius: 10,
        borderColor: 'grey',
        paddingTop:'3%'
    }

});