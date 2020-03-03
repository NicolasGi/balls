import Circle from './Circle';

const Animation = {
    canvasElt: null,
    ctx: null,
    circles : [],
    nbCircles : 25,
    colors : ['#9C7785', '#474457', '#DFCDDD', '#E8B452', '#D6284F'],
    init(){
        this.canvasElt = document.createElement("canvas");
        document.body.insertAdjacentElement("afterbegin", this.canvasElt);
        this.ctx = this.canvasElt.getContext('2d');
        this.circles =[];
        this.resizeCanvas();
        for(let i=0 ; i < this.nbCircles ; i++){
            this.circles.push(new Circle(Animation));
        }
        this.draw();
        this.animate();
    },
    draw(){
        for (let i = 0; i < this.circles.length ; i++) {
            this.circles[i].draw();
        }
    },
    animate() {
        this.ctx.clearRect(0,0,this.canvasElt.width,this.canvasElt.height);
        this.draw();

        window.requestAnimationFrame(()=>{
            this.animate()
        });
    },
    resizeCanvas(){
        this.canvasElt.width = window.innerWidth;
        this.canvasElt.height = window.innerHeight;
    },
    createBalls(parent){
        for(let i=0; i<2; i++){
            this.circles.push(new Circle(Animation, parent))
        }
        this.circles.splice(this.circles.indexOf(parent), 1)
    },
    deleteBall(parent) {
        this.circles.splice(this.circles.indexOf(parent), 1)
    }
};

//window.addEventListener('resize', Animation.init());
Animation.init();

