System.register([], function (exports_1, context_1) {
    "use strict";
    var Things;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Things) {
                var Animal = /** @class */ (function () {
                    function Animal() {
                    }
                    Animal.prototype.move = function () { return 3; /* ... */ };
                    return Animal;
                }());
                Things.Animal = Animal;
                var Plant = /** @class */ (function () {
                    function Plant() {
                    }
                    Plant.prototype.photosynthesize = function () { };
                    return Plant;
                }());
                Things.Plant = Plant;
            })(Things || (Things = {}));
            exports_1("Things", Things);
        }
    };
});
//# sourceMappingURL=animal.js.map