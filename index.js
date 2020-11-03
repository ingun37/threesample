"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __importStar(require("three"));
const TeapotBufferGeometry_1 = require("three/examples/jsm/geometries/TeapotBufferGeometry");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1 / 1, 1, 100000);
const ambientLight = new THREE.AmbientLight(0x333333); // 0.2
const light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(512, 512);
document.body.append(renderer.domElement);
const teapot = new THREE.Mesh(new TeapotBufferGeometry_1.TeapotBufferGeometry(1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
scene.add(teapot);
camera.position.set(3, 2, 3);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
