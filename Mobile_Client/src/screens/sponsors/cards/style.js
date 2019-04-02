import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5FC6CA",
		borderRadius: 4,
		borderColor: "#C0C0C0",
		borderWidth: 2,
	},

	modalBackground: {
		flex: 1,
		backgroundColor: '#39a8ac',
	},

	modal: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
		padding: 15,
		borderWidth: 1,
		borderRadius: 12,
		width: '80%',
		backgroundColor: '#F282B3'
	},

	button: {
		color: 'white', 
		borderWidth: 1, 
		borderRadius: 3,
		backgroundColor: '#5FC6CA',
		padding: 6,
		fontSize: 16
	}
});