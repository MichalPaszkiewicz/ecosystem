module Ecosystem.Behaviour {

    export class Brain {

        genetics: Chromosome[];

        constructor(genetics: Chromosome[]) {
            this.genetics = genetics;
        }
    }

}