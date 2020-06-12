import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'


export default props => {
    const SwipeDelete = () => {
        return (
        <TouchableOpacity style={styles.swipedelete}
                        onPress={() => {
                            props.onDelete && props.onDelete(props.id)
                        }}>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>Deletar</Text>
        </TouchableOpacity>
        )
    }
    return(
        <Swipeable renderRightActions={SwipeDelete}>
        <View style={styles.container}>
            <Text style={styles.texto}>Data: {props.date}</Text>
            <Text style={styles.texto}>Local: {props.local}</Text>
            <Text style={styles.texto}>Descrição: {props.desc}</Text>
            <Text style={styles.texto}>Valor: {props.valor}</Text>
            
        </View>
        </Swipeable>
        
    )
}
``
const styles = StyleSheet.create({
    container: {
        borderBottomWidth:1,
        margin: 1,
        padding: 1,
        flexDirection: 'column'

    },
    texto: {
        fontSize: 20,
        margin: 10,

    },
    swipedelete: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        height: '95%',
        borderLeftWidth: 2,
        borderLeftColor: 'black'
    }
})
