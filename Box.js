class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 1.0,
            friction: 2.0,
            density: 1.0
        }
        this.body= Bodies.rectangle(x,y, width,height,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
        pop();

    }
}