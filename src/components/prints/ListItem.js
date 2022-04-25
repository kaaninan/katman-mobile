import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'

const ListItem = () => {
	return (
		<View style={styles.container}>
			<Text>ListItem</Text>
		</View>
	)
}

export default ListItem

const styles = StyleSheet.create({
	
	container: {
		backgroundColor: colors.dark,
		marginBottom: 20,
	},

})