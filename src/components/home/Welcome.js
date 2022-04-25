import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { paddingScreen } from '../../styles/metric'

const Welcome = ({name}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Merhaba {name ? name : "John"},</Text>
			<Text style={styles.textSmall}>Baskıya hazır mısın?</Text>
		</View>
	)
}

export default Welcome

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: paddingScreen * 2
	},
	
	text: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 31,
		color: colors.white,
	},
	
	textSmall: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '300',
		fontSize: 18,
		color: colors.white,
        marginTop: 4,
	},
})