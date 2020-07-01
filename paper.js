class Paper {
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
        
        var pos = this.body.position;
        var angle = this.body.angle
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}
