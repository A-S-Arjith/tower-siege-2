class SlingShot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        }

        this.sling= Constraint.create(options);
        this.pointB=point2;
        World.add(world,this.sling); 
}

fly(){
    this.sling.bodyA=null;
}
attach(body1){
    this.sling.bodyA=body1;
}
 display(){
    push();
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            stroke("#301608");
            if(pointA.x>220){
                strokeWeight(4);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
            else{
                strokeWeight(8);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }  
        }
        pop();
        
    }
}