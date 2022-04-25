import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import SearchIcon from '../../assets/img/Search.svg'
import colors from '../../styles/colors';
import { paddingScreen } from '../../styles/metric';

const Search = () => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input} 
				placeholderTextColor={'#717171'}
				placeholder={'Müşteri veya baskı arayın'}
				returnKeyType={'search'}
				keyboardAppearance={'dark'}
				maxLength={100}
				// enablesReturnKeyAutomatically={true}
				/>
			<View style={styles.iconContainer}>
				<SvgXml width={24} height={24} xml={SearchIcon} style={styles.icon} />
			</View>
		</View>
	)
}

export default Search

const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		marginTop: 30,
		marginHorizontal: paddingScreen,
	},

	iconContainer:{
		position: 'absolute',
		left: 18,
		top: 13,
		bottom: 13,
		width: 24,
		height: 24,
		// backgroundColor: 'red',
	},

	icon: {
		
	},

	input: {
		flex: 1,
		height: 50,
		backgroundColor: colors.dark,
		borderRadius: 15,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 12,
		paddingLeft: 18 + 18 + 24,
		paddingRight: 18,
		color: colors.white,
	}
})