import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 226, 184)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    textInput: {
        borderRadius: 10,
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
        padding: 12,
        color: "#665b50",
        backgroundColor: "white"
    },
    submitButton: {
        marginTop: 30,
        padding: 12,
        // // margin: 10,
        borderRadius: 25,
        width: '100%',
        backgroundColor: "#665b50",
        color: "#FFF",
        alignItems: "center"
    },

    whiteText: {
        color: "#FFF",
        fontSize: 16
    },
    backLabel: {
        fontSize: 14,
        paddingTop: 30,
        alignSelf: 'flex-end',
        color: '#675C50',
        marginRight: 8
    },
    lable: {
        color: '#675C50',
        alignSelf: 'flex-start',
        marginLeft: 8
    }
});

module.exports = styles;
