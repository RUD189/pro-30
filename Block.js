class Block{
  constructor(x, y) {
      var options = {
        isStatic:false,
        restitution:0.8,
        friction:1
        //density:0.5
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.visibility = 225;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.heigth);
          pop();
      }
      else{
        push();
        World.remove(world,this.body);
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        pop();
      }
    }
}
