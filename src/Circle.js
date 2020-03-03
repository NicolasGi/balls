class Circle {
    constructor(animation, balls = null ) {
        this.animation = animation;
        //this.canvasElt = animation.canvasElt;
        if(balls === null){
            this.radius = 10 + Math.round(Math.random() * 30);
            this.posX = this.radius + Math.floor(Math.random() * (animation.canvasElt.width - 2 * this.radius));
            this.posY = this.radius + Math.floor(Math.random() * (animation.canvasElt.height/4 - 2 * this.radius));
            this.color = animation.colors[Math.floor(Math.random() * animation.colors.length)];
            this.velocityX = 0;
            this.velocityY = 2;
            this.speed = 1;
            this.friction = 2;
        }else{
            this.radius =  balls.radius /2;
            this.posX = balls.posX;
            this.posY = balls.posY;
            this.color = balls.color;
            this.velocityX = -2 + Math.random() * 3;
            this.velocityY = balls.velocityY;
            this.speed = balls.speed;
            this.friction = balls.friction;
        }
        this.canvas = animation.canvasElt;
        this.ctx = animation.ctx;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        this.updateCoordinates()
    }
    updateCoordinates(){
        this.posY += this.velocityY;
        this.posX += this.velocityX;

        if (this.x >= this.canvas.width - this.radius) {
            this.x = this.canvas.width - this.radius;
            this.velocityX *= -1
        }

        if(this.posY >= this.canvas.height - this.radius){

            this.posY = this.canvas.height - this.radius;
            this.speed += 0.2;
            this.velocityY -= this.friction;
            this.velocityY = -this.velocityY;

            if(this.radius > 5){
                this.animation.createBalls(this);
            }else{
                this.animation.deleteBall(this);
            }
        }

        this.velocityY += this.speed;
    }
}

export default Circle;
