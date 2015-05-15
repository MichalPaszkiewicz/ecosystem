module Ecosystem.Geography {

    // standard singleton pattern
    export class World {
        private static instance: World;

        regions: Region[];

        constructor() {
            this.regions = [];
        }

        static get Instance() {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new World();
            }
            return this.instance;
        }
    }

} 