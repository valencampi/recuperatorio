import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Button, Alert, Text, TextInput, TouchableOpacity, TouchableHighlight, View, FlatList } from 'react-native';
import { tarjet, home } from '../styles/Styles';
import { getData } from '../api/RandomCharacter';
import { Guardadas } from '../components/Guardadas';

export class Importadas extends Component {
    constructor(){
        super();
        this.state = {
            items: {},
            contador: 1
        }
    }   

    async componentDidMount(){
        await this.getDataguardado()
    }

    async getDataguardado(){
        try{
            let result = await AsyncStorage.getItem('guardado')
            result = JSON.parse(result)
            this.setState({guardado:result})
            console.log(result);
        } catch(e){
            console.log(e);
        }
    }

    keyExtractor = (item,idx) => idx.toString();
    renderItem= ({item}) => {
        return(
            <Guardadas item={item} />
        )
    }

    render(){
        return (
            <View>
                <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                         ≡
                        </Text>
                    </TouchableOpacity>
                </View>
               
            <Text style={tarjet.tituloi}> Rick y Morty guardadas</Text>
            <View style={tarjet.flat}>
                
                 <FlatList data={this.state.guardado} renderItem={this.renderItem} keyExtractor={this.keyExtractor} > </FlatList>

            </View>
            </View>
            
    )}

}