import { StyleSheet, StatusBar, View, DeviceEventEmitter } from 'react-native'
import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../styles/colors'

export default Container = ({scroll, children, contentContainerStyle, style}) => {

	const [scrollEnable, setscrollEnable] = useState(true)

	useEffect(() => {
		let tListener = DeviceEventEmitter.addListener('isSwiping.event', listener)

		return () => {
			tListener.remove()
		}
	})

	const listener = (val) => {
		setscrollEnable(val)
	}

	return (
		<View style={[styles.container, {}]}>
			<StatusBar barStyle='light-content' backgroundColor={colors.black} />
			{scroll ?
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={contentContainerStyle}
				style={[styles.contentContainer, style]}
				keyboardDismissMode='none'
				keyboardShouldPersistTaps='handled'
				scrollEnabled={scrollEnable}
				// onMoveShouldSetResponderCapture={() => setscrollEnable(true)}
				>
				{children}
			</KeyboardAwareScrollView>
			:
			<SafeAreaView style={[styles.container, style]}>
				{children}
			</SafeAreaView>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	
	contentContainer: {
		flex: 1,
	},
})