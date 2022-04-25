import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { paddingScreen } from '../../styles/metric'
import PrintListItem from './PrintListItem'

const PrintList = ({title, onPress, color}) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity style={styles.buttonContainer} activeOpacity={0.6} onPress={onPress}>
					<Text style={styles.buttonText}>Tümünü Gör</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.scrollContainer}
				contentContainerStyle={styles.scrollContentContainer}
				>
				<PrintListItem color={color} />
				<PrintListItem color={color} />
				<PrintListItem color={color} />
				<PrintListItem color={color} />
			</ScrollView>
		</View>
	)
}

export default PrintList

const styles = StyleSheet.create({

	container: {
		marginTop: 15,
	},

	titleContainer: {
		marginHorizontal: paddingScreen,
		flexDirection: 'row',
		alignItems: 'center',
		height: 40,
	},
	title: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 15,
		color: colors.white,
		paddingLeft: 20,
		lineHeight: 40,
	},

	buttonContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	buttonText: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 12,
		color: colors.orange,
		lineHeight: 40,
	},

	scrollContainer: {
		marginTop: 12,
	},

	scrollContentContainer: {
		paddingHorizontal: paddingScreen,
	},

})