import { StyleSheet } from 'react-native'; const stylelogin = StyleSheet.create({
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
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
        width: "80%", // Ajusta el ancho del contenedor del input
    },
    tit:{
fontSize:14,
        textAlign: 'center',
        marginBottom: 40,
        color: '#fff',
    },
    icon: {
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
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
        marginBottom: 5, // Espacio extra debajo del botón
        width: '55%', // Ancho del botón ajustado al 80% del contenedor
    },
    botonText: {
        color: 'white', // Color del texto
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        width: '80%', // Asegura que los elementos estén alineados correctamente
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginTop: 120,
        marginBottom: 30,
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
