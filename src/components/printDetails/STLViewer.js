import { StyleSheet, Text, View, Platform, ActivityIndicator, DeviceEventEmitter } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../../styles/colors'
import WebView from 'react-native-webview'
import RNFS from 'react-native-fs';

const STLViewer = () => {

	const [url, seturl] = useState(null)
	const [key, setkey] = useState(1)
	const [loading, setloading] = useState(true)

	useEffect(() => {
	}, [])
	

	return (
		<View style={styles.container}>
			<View style={[{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				height: 250,
				backgroundColor: colors.black,
				zIndex: 100,
				justifyContent: 'center',
				alignItems: 'center',
			}, loading ? {display: 'flex'} : {display: 'none'}]}>
				<ActivityIndicator />
			</View>
			<WebView
				style={{flex: 1, backgroundColor: colors.black}}
				// injectedJavaScript="window.onscroll=function(){alert('Not WORK');};true;"
				// startInLoadingState={true}
				// renderLoading={() => (
				// <View style={{
				// 	position: 'absolute',
				// 	height: '100%',
				// 	width: '100%',
				// 	backgroundColor: colors.black, justifyContent: 'center', alignItems: 'center'}}>
				// 	<ActivityIndicator color={colors.white} />
				// </View>
				// )}
				source={{uri: Platform.OS == 'ios' ? RNFS.MainBundlePath + '/www/test.html' : 'file:///android_asset/www/test.html'}}
				originWhitelist={['*']}
				onLoadEnd={() => {
					setTimeout(() => {
						setloading(false)
					}, 500);
				}}

				injectedJavaScript={`
					if (!Detector.webgl) Detector.addGetWebGLMessage();

					var camera, scene, renderer;
					
					init();
					
					function init() {
						scene = new THREE.Scene();
						scene.add( new THREE.AmbientLight( 0x666666 ) );
					
						camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 800);
					
						camera.up.set(0, 0, 1);
						camera.position.set(0, -9, 6);
					
						camera.add( new THREE.PointLight( 0xffffff, 1 ) );
					
						scene.add(camera);
					
						// var grid = new THREE.GridHelper( 10, 50, 0xffffff, 0x555555 );
						// grid.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), 90 * ( Math.PI/180 ) );
						// scene.add( grid );
					
						renderer = new THREE.WebGLRenderer( { antialias: true } );
						renderer.setClearColor(0x0D0D0D);
						renderer.setPixelRatio(window.devicePixelRatio);
						renderer.setSize( window.innerWidth, window.innerHeight );
						document.body.appendChild( renderer.domElement );
					
						var loader = new THREE.STLLoader();
					
						var material = new THREE.MeshPhongMaterial( { color: 0xf0ebeb, specular: 0x111111, shininess: 1 } );
						
						// loader.load( 'https://s3.amazonaws.com/limbforgestls/EbeArm/Ebe_forearm_L/forearm_L_C4-200_L1-230.stl', function ( geometry ) {
						loader.load( 'https://inteach.org/api/bearing.stl', function ( geometry ) {
							var mesh = new THREE.Mesh( geometry, material );
					
							mesh.position.set( 0, 0, 0 );
							mesh.rotation.set( 0, 0, 0 );
							// mesh.scale.set( .02, .02, .02 );
							mesh.scale.set( .1, .1, .1 );
					
							mesh.castShadow = true;
							mesh.receiveShadow = true;
					
							scene.add( mesh );
							render();
						});
					
						var controls = new THREE.ArcballControls( camera, renderer.domElement, scene );
						controls.setGizmosVisible(false);
						controls.addEventListener( 'change', render );
						controls.update();
						
						window.addEventListener( 'resize', onWindowResize, false );
					
					}
					
					function onWindowResize() {
						camera.aspect = window.innerWidth / window.innerHeight;
						camera.updateProjectionMatrix();
						renderer.setSize( window.innerWidth, window.innerHeight );
						render();
					}
					
					function render() {
						window.ReactNativeWebView.postMessage("");
						renderer.render(scene, camera);
					}
					true;
				`}
				allowFileAccessFromFileURLs={true}
				allowUniversalAccessFromFileURLs={true}
				onError={(e) => console.warn(e)}
				key={key}
				renderError={(e) => console.warn(e)}
				onMessage={(event) => {
					DeviceEventEmitter.emit('isSwiping.event', false)
					setTimeout(() => {
						DeviceEventEmitter.emit('isSwiping.event', true)
					}, 50);
				}}/>
		</View>
	)
}

export default STLViewer

const styles = StyleSheet.create({

	container: {
		height: 250,
		backgroundColor: colors.dark,
	},

})