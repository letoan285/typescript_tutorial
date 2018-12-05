System.register(["./animal"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var thing, Greeter, greeter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (thing_1) {
                thing = thing_1;
            }
        ],
        execute: function () {
            Greeter = /** @class */ (function (_super) {
                __extends(Greeter, _super);
                function Greeter(message) {
                    var _this = _super.call(this) || this;
                    _this.greeting = message;
                    return _this;
                }
                Greeter.prototype.greet = function () {
                    return "Hello, " + this.greeting;
                };
                Greeter.prototype.add = function () {
                    return this.age * 5;
                };
                Greeter.prototype.doThing = function () {
                    return "i love " + this.move();
                };
                return Greeter;
            }(thing.Things.Animal));
            greeter = new Greeter("world");
            greeter.age = 20;
            console.log(greeter.add);
            console.log(greeter.doThing());
        }
    };
});
//# sourceMappingURL=index.js.map