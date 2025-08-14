import * as THREE from '../vendor/three/build/three.module.js';
import { GLTFLoader } from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../vendor/three/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('#scene-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

const camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);
camera.position.set(3,3,5);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const loader = new GLTFLoader();
loader.load('../assets/models/Flamingo.glb', gltf => {
    scene.add(gltf.scene);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
