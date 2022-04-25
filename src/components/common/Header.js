import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { SvgXml } from 'react-native-svg';
import BackIcon from '../../assets/img/Back.svg'
import { paddingScreen } from '../../styles/metric';

const Header = ({navigation, title}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7} onPress={() => navigation.goBack()}>
				<SvgXml width={10} height={16} xml={BackIcon} style={styles.icon} fill='#4466B5' />
			</TouchableOpacity>
			<Text numberOfLines={1} style={styles.title}>{title}</Text>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({

	container: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: 'row',
		marginHorizontal: paddingScreen,
		// backgroundColor: 'red',
	},
	buttonContainer: {
		width: 45,
		height: 45,
		backgroundColor: 'white',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 22,
		lineHeight: 45,
		marginLeft: 14,
		color: colors.white
	},

})