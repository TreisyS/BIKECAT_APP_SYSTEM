import { StyleSheet } from 'react-native';

const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#001f3f',
    }, 
    registerText: {
        color: '#fff',  // Un color que se asemeje a un enlace
        textDecorationLine: 'underline',  // Subraya el texto para hacerlo más visible como enlace
        marginTop: 10,
        textAlign: 'center',
    }

    ,
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    label: {
        color: '#fff',
        marginBottom: 5,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default registerStyles;
