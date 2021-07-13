import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { home, tarjet } from '../styles/Styles';
import { getData } from '../api/RandomCharacter';
import { Inicio } from '../components/Inicio';


export class Home extends Component {
    constructor(){
        super();
        this.state = {
            items: {},
            contador: 1
        }
        this.agregarAguardar = this.agregarAguardar.bind(this);
        this.agregarAdescartar = this.agregarAdescartar.bind(this);
    }   

    componentDidMount(){
        getData(this.state.contador)
        .then(results =>{
            console.log(results);
            this.setState({items:results})
        })
    }

    async agregarAguardar(item){
        try{
            let result = await AsyncStorage.getItem('guardado')
            result = JSON.parse(result)
            if (result == null) result=[]
            result.push(item)
            const toJSON =JSON.stringify(result)
            await AsyncStorage.setItem('guardado', toJSON)

            this.setState({contador: this.state.contador + 1})

            if (this.state.contador < 672){
                let nuevo = await getData(this.state.contador)
                this.setState({items:nuevo})
            } else{
                Alert.alert(
                    "UPS!", "No hay mas personajes",
                    [{text: "OK", onPress: () => console.log("Fin")},]);
            }
                   

        } catch(e){}
    }

    async agregarAdescartar(){
        try{
            this.setState({contador: this.state.contador + 1})

            let nuevo = await getData(this.state.contador)
            this.setState({items:nuevo})

        }catch(e){}
    }


    render(){
        return (
        <View style={home.containerHome}>
            <View style={home.lineaboton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                        <Text style={home.lineatexto}>
                         ≡
                        </Text>
                    </TouchableOpacity>
                </View>

            <View style={tarjet.todo}>
            <Text style={tarjet.titulo}> Rick y Morty </Text>
            <View style={tarjet.flat}>
                <Inicio item={this.state.items} agregarAguardar={this.agregarAguardar} agregarAdescartar={this.agregarAdescartar}/>

            </View>
            </View>



       </View>

    )}

}
