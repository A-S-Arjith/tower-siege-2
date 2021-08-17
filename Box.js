
  class Box extends BaseClass {
    constructor(x,y,width,height) {
      isStatic: false,
      super(x,y,width,height);
      this.image = loadImage("blockpurple.png");
      this.Visiblity=255;
    }
    display(){
      if(this.body.speed<3){
        super.display();
      }else{
        push();
        World.remove(world,this.body);
        this.Visiblity-=5;
        tint(255,this.Visiblity)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
    }
    }
  