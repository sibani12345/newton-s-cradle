class Bob {
    constructor(x, y,radius ) {
      
         var options = {
            'isStatic':false,  
            'restitution':0.8,
              'friction':1.0,
              'density':1.0,
        
      }
       Matter.Bodies.circle(x, y, radius, [options], [maxSides])
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };