var Ecosystem;
(function (Ecosystem) {
    var Behaviour;
    (function (Behaviour) {
        (function (AnimalBehaviourState) {
            AnimalBehaviourState[AnimalBehaviourState["HUNTING"] = 0] = "HUNTING";
            AnimalBehaviourState[AnimalBehaviourState["MATING"] = 1] = "MATING";
            AnimalBehaviourState[AnimalBehaviourState["DRINKING"] = 2] = "DRINKING";
            AnimalBehaviourState[AnimalBehaviourState["RESTING"] = 3] = "RESTING";
        })(Behaviour.AnimalBehaviourState || (Behaviour.AnimalBehaviourState = {}));
        var AnimalBehaviourState = Behaviour.AnimalBehaviourState;
        (function (AnimalMovementState) {
            AnimalMovementState[AnimalMovementState["RUNNING"] = 0] = "RUNNING";
            AnimalMovementState[AnimalMovementState["WALKING"] = 1] = "WALKING";
            AnimalMovementState[AnimalMovementState["STROLLING"] = 2] = "STROLLING";
            AnimalMovementState[AnimalMovementState["CREEPING"] = 3] = "CREEPING";
            AnimalMovementState[AnimalMovementState["STILL"] = 4] = "STILL";
        })(Behaviour.AnimalMovementState || (Behaviour.AnimalMovementState = {}));
        var AnimalMovementState = Behaviour.AnimalMovementState;
    })(Behaviour = Ecosystem.Behaviour || (Ecosystem.Behaviour = {}));
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Behaviour;
    (function (Behaviour) {
        var Brain = (function () {
            function Brain(genetics) {
                this.genetics = genetics;
            }
            return Brain;
        })();
        Behaviour.Brain = Brain;
    })(Behaviour = Ecosystem.Behaviour || (Ecosystem.Behaviour = {}));
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Behaviour;
    (function (Behaviour) {
        (function (DiseaseSpreadType) {
            DiseaseSpreadType[DiseaseSpreadType["AIRBORNE"] = 0] = "AIRBORNE";
            DiseaseSpreadType[DiseaseSpreadType["CONTACT"] = 1] = "CONTACT";
            DiseaseSpreadType[DiseaseSpreadType["FLUID"] = 2] = "FLUID";
        })(Behaviour.DiseaseSpreadType || (Behaviour.DiseaseSpreadType = {}));
        var DiseaseSpreadType = Behaviour.DiseaseSpreadType;
    })(Behaviour = Ecosystem.Behaviour || (Ecosystem.Behaviour = {}));
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Animal = (function () {
        function Animal(size) {
            this.size = size;
            this.behaviourState = 3 /* RESTING */;
            this.movementState = 4 /* STILL */;
            this.brain = new Ecosystem.Behaviour.Brain([]);
            this.diseases = [];
        }
        return Animal;
    })();
    Ecosystem.Animal = Animal;
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Disease = (function () {
        function Disease(spreadBy, killRate) {
            this.spreadType = spreadBy;
            this.killRate = killRate;
        }
        Object.defineProperty(Disease.prototype, "killRate", {
            get: function () {
                return this._killRate;
            },
            set: function (rate) {
                if (rate >= 0 && rate <= 1) {
                    this._killRate = rate;
                }
                else {
                    throw new Error("The kill rate must be a value equal to or between 0 and 1");
                }
            },
            enumerable: true,
            configurable: true
        });
        Disease.prototype.infect = function (animal) {
            animal.diseases.push(this);
        };
        return Disease;
    })();
    Ecosystem.Disease = Disease;
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Chromosome = (function () {
        function Chromosome(value) {
            this.value = value;
        }
        return Chromosome;
    })();
    Ecosystem.Chromosome = Chromosome;
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Geography;
    (function (Geography) {
        var Region = (function () {
            function Region() {
            }
            return Region;
        })();
        Geography.Region = Region;
    })(Geography = Ecosystem.Geography || (Ecosystem.Geography = {}));
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Geography;
    (function (Geography) {
        (function (PrecipitationType) {
            PrecipitationType[PrecipitationType["NONE"] = 0] = "NONE";
            PrecipitationType[PrecipitationType["RAIN"] = 1] = "RAIN";
            PrecipitationType[PrecipitationType["SLEET"] = 2] = "SLEET";
            PrecipitationType[PrecipitationType["SNOW"] = 3] = "SNOW";
        })(Geography.PrecipitationType || (Geography.PrecipitationType = {}));
        var PrecipitationType = Geography.PrecipitationType;
        var Weather = (function () {
            function Weather() {
                this.precipitation = 0 /* NONE */;
                this.temperature = 273.16;
            }
            return Weather;
        })();
        Geography.Weather = Weather;
    })(Geography = Ecosystem.Geography || (Ecosystem.Geography = {}));
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Geography;
    (function (Geography) {
        // standard singleton pattern
        var World = (function () {
            function World() {
                this.regions = [];
            }
            Object.defineProperty(World, "Instance", {
                get: function () {
                    if (this.instance === null || this.instance === undefined) {
                        this.instance = new World();
                    }
                    return this.instance;
                },
                enumerable: true,
                configurable: true
            });
            return World;
        })();
        Geography.World = World;
    })(Geography = Ecosystem.Geography || (Ecosystem.Geography = {}));
})(Ecosystem || (Ecosystem = {}));
//# sourceMappingURL=@script.js.map