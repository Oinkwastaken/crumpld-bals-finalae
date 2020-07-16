class ground{
    constructor(x,y,width,height){
     var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
        }
  
        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            push()
            translate(pos.x,pos.y)
            rotate(this.body.angle)
            fill(255);
            rect(0,0, this.width, this.height);
            pop();
          }
        
}
