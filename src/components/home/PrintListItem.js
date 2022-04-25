import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import { paddingScreen } from '../../styles/metric'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import ClockIcon from '../../assets/img/Clock.svg'

const PrintListItem = ({color}) => {
    const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => navigation.navigate('PrintDetails')}>
			<View style={styles.imgContainer}>
				<Image
					source={require('../../assets/img/Cark.png')}
					resizeMode='contain'
					style={styles.img} />
			</View>
			<View style={styles.insideContainer}>
				<Text numberOfLines={1} style={styles.textName}>Bearing.stl</Text>
				<View style={styles.timeContainer}>
					<SvgXml width={15} height={15} xml={ClockIcon} style={styles.icon} />
					<Text style={styles.timeText}>1s 21dk</Text>
				</View>
				<View style={styles.line}></View>
				<Text numberOfLines={1} style={styles.textClient}>Kağan İnan</Text>
				<View style={[styles.colorContainer, {backgroundColor: color}]}></View>
			</View>
		</TouchableOpacity>
	)
}

export default PrintListItem

const styles = StyleSheet.create({

	container: {
		width: 150,
		// minHeight: 100,
		marginRight: 18,
	},

	imgContainer: {
		// backgroundColor: 'red',
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		zIndex: 10,
		alignItems: 'center',
	},
	img: {
		width: 150,
		height: 100,
	},
	insideContainer: {
		// minHeight: 100,
		backgroundColor: colors.dark,
		marginTop: 50,
		borderRadius: 15,
		overflow: 'hidden',
	},

	textName: {
		marginTop: 54,
		paddingHorizontal: paddingScreen,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 13,
		color: colors.white,
		opacity: 0.5,
		textAlign: 'center',
	},
	timeContainer: {
		flexDirection: 'row',
		// backgroundColor: 'red',
		justifyContent: 'center',
		marginTop: 8,
	},
	timeText: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '500',
		fontSize: 12,
		color: colors.white,
		opacity: 0.5,
		marginLeft: 6,
	},
	line: {
		height: 1,
		backgroundColor: '#929292',
		marginHorizontal: 18,
		marginTop: 6,
		opacity: 0.1,
	},
	textClient: {
		marginTop: 6,
		paddingHorizontal: paddingScreen,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '600',
		fontSize: 16,
		color: colors.white,
		textAlign: 'center',
	},
	colorContainer: {
		marginTop: 8,
		height: 18,
	},

})