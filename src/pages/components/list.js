import React, {Component} from 'react'
import {View,FlatList,StyleSheet,Text,TouchableOpacity} from 'react-native'
import Consulta from './consulta'
import Cadastro from './cadastro'
import Vazio from './vazio'
import AsyncStorage from '@react-native-community/async-storage'


const initialState = {
    showCadastro: false,
    dados: []
}


export default class Lista extends Component {

    state = {
        ...initialState
}
componentDidMount = async () => {
    const dadosString = await AsyncStorage.getItem('dadosState')
    const state = JSON.parse(dadosString) 
    this.setState(state)
}

addGasto = addGasto => {
    const dados = [...this.state.dados]
    dados.push({
        id:Math.random(),
        date: addGasto.date,
        local: addGasto.local,
        desc: addGasto.desc,
        valor: + addGasto.valor

    })
    this.setState({dados, showCadastro: false},this.storeDados)
}

    deleteGasto = id => {
        const dados = this.state.dados.filter(dados => dados.id !== id)
        this.setState({dados},this.storeDados)
    }
    
    storeDados = () => {
        AsyncStorage.setItem('dadosState',JSON.stringify(this.state))
    }


    render() {
        const apenasvalor = p => p.valor
        const valores = this.state.dados.map(apenasvalor)
        const reducer = (a,b) => a+b
        const total = valores.reduce(reducer,0)
        return(
            <> 
            <View style={styles.container}>
            <Cadastro  isVisible={this.state.showCadastro}
            onCancel={() => this.setState({showCadastro:false})}
            onSave={this.addGasto}/>
           
            <FlatList data={this.state.dados}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Consulta {...item} dados={this.state.dados} 
            onDelete={this.deleteGasto}/> }/>
            
        </View>
        
        <View style={styles.total}>
            <Text style={styles.texto}>Total: {total}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => this.setState({showCadastro:true})}>
                <Text style={styles.mais}>Novo</Text>
            </TouchableOpacity>
            </View>
        </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 8,
    },
    total: {
        flex: 1,
        margin: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        opacity: 0.8,

    },

    botao: {
        borderBottomWidth: 1,
        marginRight: 30,
        borderBottomWidth: 2,
        borderColor: 'yellow',
        height: 40,
    },
    mais: {
        fontSize: 30,
        color: 'yellow',
        fontWeight: 'bold'
    },

    texto: {
        fontSize: 30,
        color: 'yellow',
        fontWeight: 'bold'
    }
})