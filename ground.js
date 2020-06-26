class Ground {
    constructor() {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(width/2, 625, width, 20, options);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        rect(width/2, 625, width, 20);
    }
}