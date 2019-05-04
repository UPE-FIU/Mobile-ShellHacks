import { StyleSheet } from 'react-native'
export default style = StyleSheet.create({
    notificationContainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 20,
        marginBottom: 30,
        backgroundColor: "#FFF",
        borderRadius: 4,
        borderWidth: 1.8,
        borderColor: "#2C82A9",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9
    },
    header: {
        fontSize: 24,
        textAlign: "left",
        marginVertical: 20
    },
    tag: {
        fontSize: 12,
        marginTop: 15,
        fontWeight: "bold"
    },
    callToAction: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2
    },
    spacing: {
        padding: 20,
        backgroundColor: "#FFF"
    }
});
