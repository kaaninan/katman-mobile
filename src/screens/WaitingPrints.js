import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../components/common/Container'
import Header from '../components/common/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ListItem from '../components/prints/ListItem'

const WaitingPrints = ({navigation}) => {

	return (
		<Container>
			<Header navigation={navigation} title={"Onay Bekleyen Baskılar"} />

			<Container scroll>
				<ListItem />
				<ListItem />
				<ListItem />
			</Container>
		</Container>
	)
}

export default WaitingPrints

const styles = StyleSheet.create({})