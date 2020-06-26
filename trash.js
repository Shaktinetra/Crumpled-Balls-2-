class Trash {
    constructor() {
        var options ={
            isStatic: true
        }
        this.bodyb = Bodies.rectangle(600, 560, 100, 20, options);
        this.bodyr = Bodies.rectangle(645, 565, 20, 100, options);
        this.bodyl = Bodies.rectangle(555, 565, 20, 100, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.bodyb);
        World.add(world, this.bodyr);
        World.add(world, this.bodyl);
    }

    display() {
        imageMode(CENTER);
        image(this.image, 600, 560, 100, 100)
    }
}