import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/common/Container';
import Welcome from '../components/home/Welcome';
import Search from '../components/home/Search';
import Setting from '../components/home/Setting';
import CreateOffer from '../components/home/CreateOffer';
import PrintList from '../components/home/PrintList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../styles/colors'

const Home = ({navigation}) => {
	return (
		<Container scroll contentContainerStyle={{ paddingTop: 14, paddingBottom: 70 }} style={{ marginBottom: 50, marginTop: useSafeAreaInsets().top }}>
			<Welcome name={"Mert"} />
			<View style={{flexDirection: 'row'}}>
				<Search />
				<Setting />
			</View>
			<CreateOffer />
            {/* TODO En fazla 5 tane olacak */}
			<PrintList title={"Onaylanan Baskılar"} onPress={() => navigation.navigate("ApprovedPrints")} color={colors.blue} />
			<PrintList title={"Onay Bekleyen Baskılar"} onPress={() => navigation.navigate("WaitingPrints")} color={'orange'} />
			<PrintList title={"Tamamlanan Baskılar"} onPress={() => navigation.navigate("CompletedPrints")} color={'green'} />
		</Container>
	)
}

export default Home

const styles = StyleSheet.create({})