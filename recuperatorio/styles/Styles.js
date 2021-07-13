import {StyleSheet} from 'react-native';

const home = StyleSheet.create({
    containerHome: {
        justifyContent: 'center',
        marginTop: 250,
        alignItems: 'center',
    },
    titulo: {
        justifyContent: 'center',
        color: 'red',
        fontSize: 20,
        marginBottom: 10,
    },
    principal:{
        letterSpacing: 2,
        color: 'black',
        fontWeight: '300',
        fontSize: 30,
    },
    lineaboton: {
        width: 50,
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: 10,
        bottom: 650,
    },
    lineatexto: {
        color: 'white',
        fontSize: 25,
    },

})
const tarjet = StyleSheet.create({
    todo:{
        justifyContent: 'center',
        top: 70,
    },
    flat:{
        height: '80%',
        width: '100%',
    },
    container:{
        justifyContent: 'center',
        marginBottom: 20,
    },
    tarjeta: {
        marginTop: 10,
        marginRight: 7,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    contenido: {
        justifyContent: 'center',
    },
    titulo: {
        justifyContent: 'center',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'green',
        fontSize: 25,
        marginBottom: 0,
        marginTop: 0,
        flex: 1,
        width: '100%',
        height: '12%',
        fontWeight: '300',
        letterSpacing: 3,
    },
    tituloi: {
        justifyContent: 'center',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'green',
        fontSize: 25,
        marginBottom: 2,
        marginTop: 120,
        flex: 1,
        width: '100%',
        height: '12%',
        fontWeight: '300',
        letterSpacing: 3,
    },
    interior: {
        fontStyle: 'italic',
    },
   eliminar : {
        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    guardar : {
        fontSize: 12,
        color: 'blue',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    imagen: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    detalle: {
        textAlign: 'center',
    },
    nombre:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    verdetalle: {
        marginTop: 200,
        margin: 7,
        justifyContent: 'center',
        textAlign: 'center',
    },
    atras: {
        color: 'green',
        textAlign: 'right',
        flex: 1,
        width: '100%',
        height: '3%',
        margin: 2,
    },
    boton: {
        color: 'green',
        fontSize: 15,
        textAlign: 'center',
    },
    fav: {
        textAlign: 'center',
        margin: 4,
        color: '#b40a0d',
        fontSize: 13,
        fontWeight: '500',
        fontWeight: '300',
        letterSpacing: 2,
    },
    coment: {
        margin: 4,
        color: '#E18510',
        fontSize: 13,
        fontWeight: '500',
        fontWeight: '300',
        letterSpacing: 2,
    },
})


export { home, tarjet }
