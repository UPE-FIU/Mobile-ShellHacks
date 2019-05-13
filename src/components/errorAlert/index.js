import { Alert } from 'react-native'

const errorAlert = (title, message) => {
    return (
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'OK',
                    style: 'cancel',
                },
            ]));
}

export default errorAlert;