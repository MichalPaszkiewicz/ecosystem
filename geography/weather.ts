module Ecosystem.Geography {

    export enum PrecipitationType {
        NONE, 
        RAIN,
        SLEET, 
        SNOW
    }

    export class Weather{

        precipitation: PrecipitationType;

        temperature: number;

        constructor() {

            this.precipitation = PrecipitationType.NONE;

            this.temperature = 273.16;

        }

    }

} 