module Ecosystem {

    export class Disease {

        spreadType: Behaviour.DiseaseSpreadType;

        _killRate: number;

        get killRate(): number {
            return this._killRate;
        }
        set killRate(rate: number) {
            if (rate >= 0 && rate <= 1) {
                this._killRate = rate;
            }
            else {
                throw new Error("The kill rate must be a value equal to or between 0 and 1");
            }
        }

        constructor(spreadBy: Behaviour.DiseaseSpreadType, killRate: number) {

            this.spreadType = spreadBy;

            this.killRate = killRate;

        }

        infect(animal: Animal) {
            animal.diseases.push(this);
        }

    }

}