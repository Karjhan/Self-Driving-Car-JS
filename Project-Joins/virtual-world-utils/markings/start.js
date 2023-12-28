class Start extends Marking {
    constructor(center, directionVector, width, height) {
       super(center, directionVector, width, height);
 
       this.img = new Image();
       this.img.src = "../assets/car.png";
       this.type = "start";
    }
 
    draw(ctx) {
       ctx.save();
       ctx.translate(this.center.x, this.center.y);
       ctx.rotate(angle(this.directionVector) - Math.PI / 2);
       
       ctx.drawImage(this.img, -this.img.width / 3, -this.img.height / 3, 50, 75);
 
       ctx.restore();
    }
}