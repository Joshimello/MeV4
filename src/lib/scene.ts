import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(50, document.querySelector('#bg').offsetWidth / document.querySelector('#bg').offsetHeight, 1, 1000)
camera.position.set(6, 2, 0)

let renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
	antialias: true,
	alpha: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(document.querySelector('#bg').offsetWidth, document.querySelector('#bg').offsetHeight)
renderer.toneMapping = THREE.ReinhardToneMapping
renderer.toneMappingExposure = 2.3
renderer.shadowMap.enabled = true

let controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.maxPolarAngle = Math.PI / 1.9
controls.enabled = false

let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
scene.add(hemiLight)
 
let spotLight = new THREE.SpotLight(0xffa95c, 4)
spotLight.castShadow = true
spotLight.shadow.bias = -0.0001
spotLight.shadow.mapSize.width = 1024*4
spotLight.shadow.mapSize.height = 1024*4
spotLight.position.set(camera.position.x + 10, camera.position.y + 10, camera.position.z + 10)
scene.add(spotLight)

let model

let modelNames = ['code', 'edit', 'cook', 'game', 'vibe']
modelNames.forEach(obj => {
	new GLTFLoader().load(`./model/${obj}.glb`, res => {
		let newModel = res.scene.children[0]
		newModel.position.y = -0.5
		newModel.position.z = 0
		newModel.visible = false
		newModel.name = obj
		newModel.traverse(i => {
			if (i.isMesh) {
				i.castShadow = true
				i.receiveShadow = true
				if (i.material.map) {
					i.material.map.anisotropy = 16	
				}
			}
		})

		scene.add(newModel)

		if(newModel.name == 'code') {
			model = newModel
			model.visible = true
		}
	})
})

var mouseX = 0, mouseY = 0
var moveX = 0, moveY = 0

// const cursor = document.querySelector('#cursor')

document.onmousemove = event => {
    mouseX = ( event.clientX - window.innerWidth / 2 )
    mouseY = ( event.clientY - window.innerHeight / 2 )

    // cursor.style.top = event.clientY + 'px'
	// cursor.style.left = event.clientX + 'px'
}

const animate = () => {
	requestAnimationFrame(animate)

	moveX += ( mouseX - moveX ) * .02
    moveY += ( - mouseY - moveY ) * .02

    if (model) {
		model.rotation.y = moveX / 900
		model.rotation.z = moveY / 1000
    }

	renderer.render(scene,camera)
}

animate()



export const changeModelTo = item => {
	model.visible = false
	model = scene.getObjectByName(item)
	model.visible = true
}