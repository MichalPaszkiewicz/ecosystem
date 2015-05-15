module Ecosystem {

    export class Disease {

        spreadType: Behaviour.DiseaseSpreadType;

        private _killRate: number;

        private _damage: number;

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

        get damage(): number {
            return this._damage;
        }
        set damage(damage: number) {
            if (damage >= 0 && damage <= 10){
                this._damage = damage;
            }
            else {
                throw new Error();
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