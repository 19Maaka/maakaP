import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor();
    }

    setFloor(){
        this.geometry = new THREE.PlaneGeometry(1000,1000);
        this.material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.BackSide});
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.plane.rotation.x = Math.PI/2;
        this.plane.receiveShadow = true;
        this.scene.add(this.plane);
    }

    resize(){}
    update(){}
}