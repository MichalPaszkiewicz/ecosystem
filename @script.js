var Ecosystem;
(function (Ecosystem) {
    var Animal = (function () {
        function Animal() {
            this.size = 100;
        }
        return Animal;
    })();
    Ecosystem.Animal = Animal;
})(Ecosystem || (Ecosystem = {}));
//# sourceMappingURL=@script.js.map