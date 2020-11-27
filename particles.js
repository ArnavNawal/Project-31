class Particles{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
    this.body = Bodies.circle(x,y,10,options)
    this.radius = radius
    this.color = color(random(255, 0, 0), random(255, 100, 0),(random(0, 0, 255)))
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10)
    
    }

}