module Ecosystem {

    export class Disease {

        spreadType: Behaviour.DiseaseSpreadType;

        constructor(spreadBy: Behaviour.DiseaseSpreadType) {
            this.spreadType = spreadBy;
        }
    }
}