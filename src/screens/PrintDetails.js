import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../components/common/Container'
import Header from '../components/common/Header'
import ListItem from '../components/prints/ListItem'
import colors from '../styles/colors'
import STLViewer from '../components/printDetails/STLViewer'
import { paddingScreen } from '../styles/metric'
import { SvgXml } from 'react-native-svg'

import FilamentIcon from '../assets/img/menu/Filament.svg'
import PrinterIcon from '../assets/img/menu/Printer.svg'
import ClientIcon from '../assets/img/menu/Account.svg'
import ClockIcon from '../assets/img/Clock.svg'
import WeightIcon from '../assets/img/Weight.svg'
import PhoneIcon from '../assets/img/Phone.svg'
import MailIcon from '../assets/img/Mail.svg'


const SectionTitle = ({text}) => {
	return(
		<View style={stylesSectionTitle.container}>
			<Text style={stylesSectionTitle.text}>{text}</Text>
		</View>
	)
}

const stylesSectionTitle = StyleSheet.create({
	container: {
		marginTop: 24,
		paddingHorizontal: paddingScreen,
	},
	text: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '500',
		fontSize: 18,
		color: colors.white,
	},
})

const SectionItem = ({img, title, subtitle, style, width, height}) => {
	return(
		<View style={stylesSectionItem.container}>
			<View style={stylesSectionItem.imageContainer}>
				<SvgXml width={width} height={height} xml={img} fill={colors.white} style={style} />
			</View>
			<View style={stylesSectionItem.textContainer}>
				<Text style={stylesSectionItem.title}>{title}</Text>
				<Text style={stylesSectionItem.subtitle}>{subtitle}</Text>
			</View>
		</View>
	)
}

const stylesSectionItem = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 24,
		// marginRight: paddingScreen,
		// backgroundColor: 'red',
	},
	imageContainer: {
		width: 45,
		height: 45,
		backgroundColor: '#252525',
		borderRadius: 100,
		marginRight: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
	},
	title: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '700',
		fontSize: 13,
		color: '#868686',
		lineHeight: 17,
	},
	subtitle: {
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 11,
		color: colors.white,
		lineHeight: 14,
		marginTop: 2,
	},
})


const PrintDetails = ({navigation}) => {

	return (
		<Container>
			<Header navigation={navigation} title={"Kağan İnan"} />

			<Container scroll contentContainerStyle={{paddingBottom: paddingScreen * 3}}>
				<STLViewer />
				<Text style={styles.textFile}>Bearing.stl</Text>
				
				<SectionTitle text={'Parça Bilgileri'} />
				<View style={{ flexDirection: 'row', paddingHorizontal: paddingScreen }}>
					<SectionItem img={WeightIcon} title={'Parça Ağırlığı'} subtitle={'23 gram'} width={19} height={19} />
					<SectionItem img={ClockIcon} title={'Baskı Süresi'} subtitle={'1s 21dk'} style={{marginLeft: 3, marginTop: 1}} width={24} height={24} />
				</View>
				<View style={{ flexDirection: 'row', paddingHorizontal: paddingScreen }}>
					<SectionItem img={FilamentIcon} title={'Filament'} subtitle={'Beyaz PLA'} width={24} height={24} />
					<SectionItem img={PrinterIcon} title={'Yazıcı'} subtitle={'Ender 3 V2'} style={{marginLeft: 1, marginTop: 4}} width={24} height={24} />
				</View>

				<SectionTitle text={'Müşteri Bilgileri'} />
				<View style={{ flexDirection: 'row', paddingHorizontal: paddingScreen }}>
					<SectionItem img={ClientIcon} title={'Adı Soyadı'} subtitle={'Kağan İnan'} width={21} height={21} />
					<SectionItem img={PhoneIcon} title={'Telefon'} subtitle={'0530 926 38 19'} width={21} height={21} />
				</View>
				<View style={{ flexDirection: 'row', paddingHorizontal: paddingScreen }}>
					<SectionItem img={MailIcon} title={'Mail Adresi'} subtitle={'contact@kaaninan.net'} width={21} height={21} />
				</View>
			</Container>

			<TouchableOpacity
				activeOpacity={0.6}
				style={{
					width: 45,
					height: 45,
					borderRadius: 100,
					backgroundColor: '#252525',
					position: 'absolute',
					bottom: 45,
					right: paddingScreen,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text style={{
					// fontFamily: 'Montserrat-Medium',
					fontWeight: '500',
					color: colors.white,
					fontSize: 23,
				}}>₺</Text>
			</TouchableOpacity>
		</Container>
	)
}

export default PrintDetails

const styles = StyleSheet.create({

	textFile: {
		marginTop: 14,
		fontFamily: 'Montserrat-Medium',
		fontWeight: '400',
		fontSize: 24,
		color: colors.white,
		opacity: 0.5,
		textAlign: 'center',
	},

	sectionItemContainer: {

	}

})