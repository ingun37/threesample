import * as THREE from 'three';
import { Texture } from 'three';
import { TeapotBufferGeometry } from "three/examples/jsm/geometries/TeapotBufferGeometry";

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(45, 1/1, 1, 100000);
const ambientLight = new THREE.AmbientLight( 0x333333 );	// 0.2
const light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
const renderer = new THREE.WebGLRenderer({preserveDrawingBuffer:true});
renderer.setSize(512, 512);
document.body.append(renderer.domElement);
const teapot = new THREE.Mesh(new TeapotBufferGeometry(1), new THREE.MeshPhongMaterial({color: 0x00ff00}));
const sphere = teapot.geometry.boundingSphere;
const camera = new THREE.OrthographicCamera(-5,5,5,-5,1,10000)

teapot.castShadow = true;
light.castShadow = true;
scene.add(teapot)
camera.position.set( 0,0,100);
camera.lookAt(0,0,0);
scene.add(light, ambientLight);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

function generateTexs() {
    console.log('cccccc')
    if (sphere) {
        console.log(sphere)
        const newRenderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true});
        newRenderer.setSize(512,512);
        var renderer = newRenderer
        const r = sphere.radius
        const cam = new THREE.OrthographicCamera(-r, r, r, -r, 1, 10000 );
        cam.position.set(0,4,10);
        cam.lookAt(sphere.center)
        cam.updateProjectionMatrix()
        cam.updateMatrix()
        // const renderTarget = new THREE.WebGLRenderTarget(512,512);
        // renderer.setRenderTarget(renderTarget);
        renderer.render(scene, cam);
        // const data = new Uint8Array( 512 * 512 * 3 );

        const img = document.createElement('img');
        img.src = renderer.domElement.toDataURL('image/png');
        document.body.append(img);
        setTimeout(()=>{
            console.log('aoeuaoeuaoeu')
        }, 400)
    }
    return 1;
}

setTimeout(generateTexs, 1000)