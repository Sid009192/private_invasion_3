class Boat {

  constructor(x, y, width, height, Boatpos) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/boat.png")
    this.boatposition = Boatpos
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    fill("brown");
    imageMode(CENTER);
    image(this.image , 0, this.boatposition, this.width, this.height);
    noTint()
    pop();
  }
}
