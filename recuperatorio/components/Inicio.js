import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Modal, Text, TextInput, TouchableOpacity, View, FlatList, Image, Touchable } from 'react-native';
import { tarjet } from '../styles/Styles';

export class Inicio extends Component { 
    constructor(props){
        super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      }
  }

  guardarPersona(item){
    this.props.agregarAguardar(item);
  }

  descartarPersona(){
    this.props.agregarAdescartar();
  }


render(){
    const {item} = this.props; 

      return (
        <View key={item.id} style={tarjet.container}> 
        <View style={tarjet.tarjeta}>
            <TouchableOpacity onPress={() => this.guardarPersona(item)}><Text style={tarjet.guardar}> Guardar </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.descartarPersona()}><Text style={tarjet.eliminar}> Descartar </Text></TouchableOpacity>
          <View style={tarjet.contenido}>
                <Image style={tarjet.imagen} source={{uri: item.image}}/>
                <Text> Nombre: {item.name} </Text> 
                <Text> Especie: {item.species} </Text>
                <Text> Estado: {item.status} </Text>
          </View>
        <View>
        </View>
        </View>
        </View>
     
      )}

}