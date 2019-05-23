// Setting up scene, camera and renderer for animation
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//sets up light so that cubes are visible on the user device screen
function setUpLight(){

    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(7, 5, -5);
    scene.add(directionalLight);

}

let cubes = [];
// generates 3D cubes and assigns the position.
function generateCubes() {
    let shape = new THREE.BoxGeometry(3, 3, 3);
    let build = new THREE.MeshLambertMaterial({color: 0xffffff});


    for (let i = 0; i < 5000 ; i++) {
        let x_coordinate = Math.random()*2000-1000;
        let y_coordinate = Math.random()*1000-500;
        let z_coordinate = Math.random()*10000-5000;
        cubes[i] = new THREE.Mesh(shape, build);

        cubes[i].position.x = x_coordinate;
        cubes[i].position.y = y_coordinate;
        cubes[i].position.z = z_coordinate;
        scene.add(cubes[i]);}

    camera.position.z = 20;
    camera.position.x = 0;
    camera.position.y = 0;

    return cubes;
}
//renders the animation using cubes set up by helper functions
function render() {
    requestAnimationFrame(render);
    camera.position.z -= 5;
    for(var i = 0; i < cubes.length; i++){
        cubes[i].rotation.x += 0.05;
        cubes[i].rotation.y += 0.05;
    }

    renderer.render(scene,camera);
}


setUpLight();
generateCubes();
render();