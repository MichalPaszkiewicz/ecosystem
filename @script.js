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
        }
        return Animal;
    })();
    Ecosystem.Animal = Animal;
})(Ecosystem || (Ecosystem = {}));
var Ecosystem;
(function (Ecosystem) {
    var Disease = (function () {
        function Disease(spreadBy) {
            this.spreadType = spreadBy;
        }
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
//# sourceMappingURL=@script.js.map