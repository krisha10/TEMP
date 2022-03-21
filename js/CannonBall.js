class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }
  shoot(){
    var newAngle= cannon.angle - 28;
    // convert the angle to degrees, default is radian.
    newAngle= newAngle*(3.14/180);
    // fromAngle() helps us to shoot the ball from the perticular angle.
    var velocity= p5.Vector.fromAngle(newAngle);
    // to get higher speed multiply the velocity by 0.5
    velocity.mult(0.5)
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
