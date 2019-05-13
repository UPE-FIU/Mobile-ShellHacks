import { StyleSheet } from "react-native";
export default (style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#675C50',
        opacity: .5 
    },
    IDcontainer: {
        height: 650,
        width: 350,
        backgroundColor: '#FBEDCA',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: .255,
        // borderColor: 'gray'
    },
    userName: {
        fontSize: 20,
        fontWeight: '900',
        color: '#675C50',
        alignSelf: 'center'
    },
    smallText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#675C50',
        alignSelf: 'center'
    },
    closeModalButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }

}));