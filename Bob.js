class Bob {
    constructor (x, y, radius) {
        var options = {density: 0.7, restitution: 0.3};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        fill("magenta");  
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}

