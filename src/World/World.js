import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';


let camera;
let renderer;
let scene;

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);
        this.cube = createCube();
        const light = createLights();

        scene.add(this.cube, light);
        const resizer = new Resizer(container, camera, renderer);
    }



    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // 2. Render the scene
    async render() {
        let ix = 0, iy = 0, iz = 0;

        while (1) {
            ix += 0.01;
            iy += 0.02;
            iz += 0.015;
            this.cube.rotation.set(ix, iy, iz);
            await this.delay(100);
            renderer.render(scene, camera);
        }

    }
}

export { World };