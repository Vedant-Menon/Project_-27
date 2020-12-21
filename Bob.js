class Bob{
    constructor(x,y,r){
     var options = {
        isStatic:true,
        restitution:1,
        friction:0.3,
        density:0.8
     }   
     this.x = x
     this.y = y
     this.r = r

     this.body = Bodies.circle(x,y,this.r/2,options)
     World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        fill("green")
        rectMode(CENTER)
        ellipse(0,0,this.r)
      
          pop()
      }
}