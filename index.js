import Map2D from "classes/map2d.js";
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("webgl2");
const map = new Map2D(canvas,ctx);


function update(){
    map.draw();
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
