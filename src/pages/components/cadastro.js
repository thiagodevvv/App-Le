import React, { Component } from 'react'
import {
        View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Alert,
        Modal,
        TouchableWithoutFeedback
    } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'


const initialState = {
    date: new Date(),
    local: '',
    desc: '',
    valor: Number,
}


export default class Cadastro extends Component  {

    state = {
        ...initialState
    }
    save = () => {
        const addGasto = {
            date: moment(this.state.date).format('D [/] MMMM [/] YYYY'),
            local:this.state.local,
            desc: this.state.desc,
            valor: this.state.valor
          
            
        }
        this.props.onSave && this.props.onSave(addGasto)//salvando
        this.setState({...initialState})//voltando ao valor inicial
        
    }

    getDateTimePicker = () => {
        return <DateTimePicker value={this.state.date} 
                onChange={(_,date) => 
                this.setState({date})}
                mode='date' />
    }

    local = (local) => {
        this.setState({local:local})
    }

    desc = (desc) => {
        this.setState({desc:desc})
    }
    valor = (valor) => {
        this.setState({valor:valor})
    }

    render() {
        return (
            <>
            <Modal transparent={true} visible={this.props.isVisible} 
                    onRequestClose={this.props.onCancel}
                    animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                    </TouchableWithoutFeedback>
            <View style={styles.data}>
                {this.getDateTimePicker()}
            </View>
            <View style={styles.container}>

                <TextInput style={styles.input}
                placeholder=" Local" placeholderTextColor= "black"
                onChangeText={this.local} />
                
                <TextInput style={styles.input}
                placeholder=" Descrição" placeholderTextColor= "black"
                onChangeText={this.desc} />
                
                <TextInput style={styles.input}
                placeholder=" Valor" placeholderTextColor= "black"
                onChangeText={this.valor} />

            <View style={styles.containerbotao}>
                <TouchableOpacity  onPress={this.save}
                style={styles.cadastrar}>
                    <Text style={styles.texto}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.props.onCancel}
                style={styles.cadastrar}>
                    <Text style={styles.texto}>Cancelar</Text>
                </TouchableOpacity>
            </View>
                
            </View>
            <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                    </TouchableWithoutFeedback>
            </Modal>
            </>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        margin: 5,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        
    },

    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'

    },

    cadastrar: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        width: '40%',
        height: 50,
        margin: 2,
    },
    texto: {
        color: 'orange',
        fontSize: 19,
        fontWeight: 'bold', 
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    data: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerbotao: {
        flexDirection: 'row',
    }
})