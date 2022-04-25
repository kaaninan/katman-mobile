if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer;

init();

function init() {
	scene = new THREE.Scene();
	scene.add( new THREE.AmbientLight( 0x666666 ) );

	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 500);

	camera.up.set(0, 0, 1);
	camera.position.set(0, -9, 6);

	camera.add( new THREE.PointLight( 0xffffff, 0.8 ) );

	scene.add(camera);

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setClearColor(0x0D0D0D);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var loader = new THREE.STLLoader();

	var material = new THREE.MeshPhongMaterial( { color: 0xf0ebeb, specular: 0x111111, shininess: 10 } );
	
	loader.load( 'https://s3.amazonaws.com/limbforgestls/EbeArm/Ebe_forearm_L/forearm_L_C4-200_L1-230.stl', function ( geometry ) {
		var mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, 0, 0 );
		mesh.rotation.set( 0, 0, 0 );
		mesh.scale.set( .02, .02, .02 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );
		render();
	});

	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render );
	controls.target.set( 0, 1.2, 2 );
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
	renderer.render(scene, camera);
}
