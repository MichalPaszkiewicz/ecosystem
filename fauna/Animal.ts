module Ecosystem {

    export class Animal {

        size: Chromosome;

        aggressiveness: Chromosome;

        brain: Behaviour.Brain;

        behaviourState: Behaviour.AnimalBehaviourState;

        movementState: Behaviour.AnimalMovementState;

        move: () => void;

        constructor(size: Chromosome) {
            this.size = size;

            this.behaviourState = Behaviour.AnimalBehaviourState.RESTING;

            this.movementState = Behaviour.AnimalMovementState.STILL;

            this.brain = new Behaviour.Brain([]);
        }

    } 

}    