import { StyleSheet } from 'react-native';

const stylelogin = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
        justifyContent: 'center', // Centra el contenido
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa semitransparente sobre la imagen
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingTop: 30, // Baja el contenido 30 unidades
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    botonentrar: {
        backgroundColor: '#72cbaa', // Color de fondo
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20, // Espacio extra debajo del botón
        width: '90%', // Ancho del botón ajustado al 90% del contenedor
    },
    botonText: {
        color: 'white', // Color del texto
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        width: '90%', // Ancho del input ajustado al 90% del contenedor
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '90%', // Asegura que los elementos estén alineados correctamente
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        marginTop:75,
        marginBottom: 30
    },
    rememberMeText: {
        color: '#fff',
    },
    forgotPasswordText: {
        color: '#91dd93',
    },
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#ffff',
    },
});

export default stylelogin;
