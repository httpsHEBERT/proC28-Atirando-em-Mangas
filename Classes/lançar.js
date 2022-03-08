class Lançar {

    constructor(bodyA, pointB){

        var options = {
            bodyA: pedra.body,
            pointB: pointB,
            'stiffness': 0.004,
            'lenght': 10
        }
    
        this.pointB = pointB;        
        this.lançar = Constraint.create(options);
        World.add(world, this.lançar);
    }

    voar(){
        this.lançar.bodyA = null;
    }

    voltar(body){
        this.lançar.bodyA = body;
    }

    display(){

        if(this.lançar.bodyA){

            var pontoA = this.lançar.bodyA.position;
            var pontoB = this.pointB;

            strokeWeight(3);
            stroke(0);
            line(pontoA.x, pontoA.y, pontoB.x, pontoB.y);
        }
    }
}