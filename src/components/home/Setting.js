import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import SettingsIcon from '../../assets/img/Settings.svg'
import colors from '../../styles/colors';
import { paddingScreen } from '../../styles/metric';

const Search = ({onPress}) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
			<View style={styles.iconContainer}>
				<SvgXml width={32} height={32} xml={SettingsIcon} style={styles.icon} fill={colors.white} />
			</View>
		</TouchableOpacity>
	)
}

export default Search

const styles = StyleSheet.create({
	
	container: {
		width: 50,
		height: 50,
		marginTop: 30,
		marginRight: paddingScreen,
		// backgroundColor: colors.red,
	},

	iconContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'blue',
	},

	icon: {
		// backgroundColor: 'green'
	},

})