import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import { paddingScreen } from '../../styles/metric';

const CreateOffer = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/img/Cark.png')}
				style={styles.img}
				/>
			<LinearGradient start={{x: 0, y: 1}} useAngle={true} angle={98} colors={['#204394', '#5274C2']} style={styles.contentContainer}>
				<View style={styles.leftContainer}></View>
				<View style={styles.rightContainer}>
					<Text style={styles.text}>Hızlıca teklif oluşturabilirsin</Text>
					<TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
						<Text style={styles.buttonText}>Teklif Oluştur</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</View>
	)
}

export default CreateOffer

const styles = StyleSheet.create({

	container: {
		flex: 1,
		height: 130,
		marginHorizontal: paddingScreen,
		
		marginTop: 40,
		// overflow: 'hidden',
	},
	
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		borderRadius: 16,
	},

	img: {
		position: 'absolute',
		zIndex: 10,
		bottom: 8,
	},
	
	leftContainer: {
		flex: 1,
	},

	rightContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
	},

	text: {
		marginTop: 25,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 17,
		color: colors.white,
	},

	buttonContainer: {
		marginTop: 15,
		backgroundColor: colors.white,
		paddingHorizontal: 18,
		paddingVertical: 7,
		borderRadius: 6,
	},
	buttonText: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '700',
		fontSize: 10,
		color: '#204394',
	},

})