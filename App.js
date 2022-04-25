import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen'

import colors from './src/styles/colors';
import { store, persistor } from './src/redux/store/store';

import homeIcon from './src/assets/img/menu/Home.svg'
import accountIcon from './src/assets/img/menu/Account.svg'
import filamentIcon from './src/assets/img/menu/Filament.svg'
import printerIcon from './src/assets/img/menu/Printer.svg'

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

import { SvgXml } from 'react-native-svg';

import Home from './src/screens/Home'

import CompletedPrints from './src/screens/CompletedPrints';
import ApprovedPrints from './src/screens/ApprovedPrints';
import WaitingPrints from './src/screens/WaitingPrints';
import PrintDetails from './src/screens/PrintDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = AnimatedTabBarNavigator();

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Anasayfa';
	return routeName
  
	// switch (routeName) {
	//   case 'Ana':
	// 	return 'News feed';
	//   case 'Profile':
	// 	return 'My profile';
	//   case 'Account':
	// 	return 'My account';
	// }
  }

function App() {
	return (
		<Provider store={store}>
			<PersistGate 
				loading={null}
				persistor={persistor}>
					<NavigationContainer
						onReady={() => {
							setTimeout(() => {
								SplashScreen.hide()
							}, 1000)
						}}>
						
						<Stack.Navigator
							initialRouteName="TabBar"
							screenOptions={{
								headerShown: false,
								animationTypeForReplace: 'push'
							}}>
							
							<Stack.Screen 
								name={"TabBar"}
								component={TabNavigator}
								/>

							<Stack.Screen 
								name={"ApprovedPrints"}
								component={ApprovedPrints}
								/>

							<Stack.Screen 
								name={"WaitingPrints"}
								component={WaitingPrints}
								/>

							<Stack.Screen 
								name={"CompletedPrints"}
								component={CompletedPrints}
								/>

							<Stack.Screen 
								name={"PrintDetails"}
								component={PrintDetails}
								/>
							{/* 

							<Stack.Screen 
								name={"Connect"}
								component={Connect}
								options={({ route }) => ({
									title: "Cihaz Ekle",
									// headerShadowVisible: false,
								})}
								/>

							<Stack.Screen 
								name={"DeviceDetails"}
								component={DeviceDetails}
								options={({ route }) => ({
									title: "Cihaz 1",
									// headerShadowVisible: false,
								})}
								/>

							<Stack.Screen 
								name={"ValveDetails"}
								component={ValveDetails}
								options={({ route }) => ({
									title: "Vana Bilgileri",
									// headerShadowVisible: false,
								})}
								/>

							<Stack.Screen 
								name={"Protocol"}
								component={Protocol}
								options={({ route }) => ({
									title: "Vana Bilgileri",
									// headerShadowVisible: false,
								})}
								/> */}

						</Stack.Navigator>
					</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}


function TabNavigator({navigation}) {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				activeBackgroundColor: colors.white,
				activeTintColor: colors.blue,
				inactiveTintColor: colors.white,
				labelStyle: {
					fontFamily: 'Montserrat-Medium',
					fontWeight: '600',
					fontSize: 13,
					paddingLeft: 2,
				},
				tabStyle: {
					borderRadius: 15,
				}
			}}
			appearance={{
				topPadding: 15,
				bottomPadding: 15,
				horizontalPadding: 15,
				tabBarBackground: colors.dark,
				shadow: true,
				floating: true,
				dotSize: 'medium',
				dotCornerRadius: 12,

				// activeTabBackgrounds?: string | string[];
				// activeColors?: string | string[];
				// whenActiveShow: TabElementDisplayOptions;
				// whenInactiveShow: TabElementDisplayOptions;
			}}>

			<Tabs.Screen
				name="Anasayfa"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<SvgXml width={size+5} height={size+5} xml={homeIcon} fill={color} />
					)
				}}/>

			<Tabs.Screen
				name="Müşteri"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<SvgXml width={size+5} height={size+5} xml={accountIcon} fill={color} />
					)
				}}/>

			<Tabs.Screen
				name="Filament"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<SvgXml width={size+5} height={size+5} xml={filamentIcon} fill={color} />
					)
				}}/>

			<Tabs.Screen
				name="Yazıcı"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<SvgXml width={size+5} height={size+5} xml={printerIcon} fill={color} />
					)
				}}/>

		</Tabs.Navigator>
	)
}

export default App;