class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {bodyA: body1, bodyB: body2, pointB:{x: this.offsetX, y: this.offsetY}};
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        if (this.rope.bodyA) {
            var posA = this.rope.bodyA.position;
            var posB = this.rope.bodyB.position;
            strokeWeight(5);
            var anchor1x = posA.x;
            var anchor1y = posA.y;
            var anchor2x = posB.x + this.offsetX;
            var anchor2y = posB.y + this.offsetY;
            line(anchor1x, anchor1y, anchor2x, anchor2y);
        }
    }
}  