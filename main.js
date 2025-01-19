// Scene.

const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight,0.1, 1000);
const renderer= new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// fin Scene.

// Creer un cube.

const geometry=new THREE.BoxGeometry();
const material= new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube=new THREE.Mesh(geometry, material);

scene.add(cube)

// fin Creer un cube.

// positionner la camera.
camera.position.z=5;

// fin position de camera fin.

// boucle d'animation.


// executer la fonction
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
// fin de la boucle d'animation.

// Anime js manipulation.



// Anime.js animation for color change
anime({
    targets: cube.material.color,
    r: 255,
    g: 0,
    b: 0,
    duration: 2000,
    easing: 'linear',
    loop: true,
    direction: 'alternate'
});

