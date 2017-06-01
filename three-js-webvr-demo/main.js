// Create simple 3D scene using Three.js

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cube;

var loader = new THREE.TextureLoader();

loader.load('metal003.png', function (texture) {
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(3, 3);

	var geometry = new THREE.BoxGeometry(2,2,2);
	var material = new THREE.MeshLambertMaterial( { map: texture } );
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	draw();
});

var light = new THREE.AmbientLight('rgb(255,255,255)'); // soft white light
scene.add(light);

var spotLight = new THREE.SpotLight('rgb(255,255,255)');
spotLight.position.set( 100, 1000, 1000 );
spotLight.castShadow = true;
scene.add(spotLight);


function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(draw);
}
