class Block{
    constructor(x,y,width,height){
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic : true
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Worldd.add(world,this.body);

    }
    score(){
        if(this.visiblity<0&&this.visblity>-105){
          score++;  
        }

    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed <3){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            pop();
          }else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -5;
            pop();
            
          }
        }
    }
