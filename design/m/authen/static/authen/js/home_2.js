let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function setUpLight(){

    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(7, 5, -5);
    scene.add(directionalLight);

}

let cubes = [];
function generateCubes() {
    let shape = new THREE.BoxGeometry(3, 3, 3);
    let build = new THREE.MeshLambertMaterial({color: 0xffffff});


    for (let i = 0; i < 5000 ; i++) {
        let rx = Math.random()*2000-1000;
        let ry = Math.random()*1000-500;
        let rz = Math.random()*10000-5000;
        cubes[i] = new THREE.Mesh(shape, build);

        cubes[i].position.x = rx;
        cubes[i].position.y = ry;
        cubes[i].position.z = rz;
        scene.add(cubes[i]);}

    camera.position.z = 20;
    camera.position.x = 0;
    camera.position.y = 0;

    return cubes
}

function render() {
    requestAnimationFrame(render);
    camera.position.z -= 5;
    for(var i = 0; i < cubes.length; i++){
        cubes[i].rotation.x += 0.05;
        cubes[i].rotation.y += 0.05;
    }

    renderer.render(scene,camera);
}
function repeatRender() {
    setInterval(render(), 54000);
}

setUpLight();
generateCubes();
render();