class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true
        }
    this.body = Bodies.circle(x,y,10,options)
    this.radius = 10
    World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS);
        stroke("green")
        strokeWeight(3)
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,10,10)
    
    }

}