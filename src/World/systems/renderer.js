import { WebGLRenderer } from '../../../vendor/three//build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };