class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");

    this.arr = [];
  }

  display() {
  
    super.display();
  
    if(this.body.velocity.x > 3 && this.body.position.x > 200){

      var dat = [this.body.position.x,this.body.position.y];
      this.arr.push(dat);

    }
    if(gameState === "launched"){
    for (var tr = 0; tr < this.arr.length; tr++){
      image(this.image1,this.arr[tr][0],this.arr[tr][1]);
    }
  }

  }
}
