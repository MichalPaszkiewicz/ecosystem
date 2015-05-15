module Ecosystem {

    export class Animal {

        private _alive: Boolean;

        size: Chromosome;

        aggressiveness: Chromosome;

        brain: Behaviour.Brain;

        behaviourState: Behaviour.AnimalBehaviourState;

        movementState: Behaviour.AnimalMovementState;

        move: () => void;

        diseases: Disease[];

        private _health: number;

        get health(): number {
            return this._health;
        }
        set health(health: number) {
            if (this.health >= 0 && this.health <= 100) {
                this.health = health;
            }
            else {
                throw new Error("Health cannot be set to less than 0 or more than 100");
            }
        }

        fightDiseases(): void {
            
            for (var i in this.diseases) {
                if (Math.random() > this.diseases[i].killRate) {
                    this.health = Math.max(0, this.health - this.diseases[i].damage);
                }
                if (this.health == 0){
                    this._alive = false;                    
                }
            }

        }

        constructor(size: Chromosome) {
            this._alive = true;

            this.size = size;

            this.behaviourState = Behaviour.AnimalBehaviourState.RESTING;

            this.movementState = Behaviour.AnimalMovementState.STILL;

            this.brain = new Behaviour.Brain([]);

            this.diseases = [];

            this.health = 100;
        }

    } 

}    