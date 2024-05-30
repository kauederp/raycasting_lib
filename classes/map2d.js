export default class Map2D{
    constructor(canvas,ctx){
        this.ctx = ctx;
        this.canvas = canvas;
    }
    draw(width, height){
        this.canvas.width = width;
        this.canvas.height = height;

        this.canvas.style.width = width+"px";
        this.canvas.style.height = height+"px";
        this.canvas.style.border = "solid 1px #000";

    }
}