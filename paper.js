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
        image(this.image, pos.x, pos.y, 50, 50);
    }
}
