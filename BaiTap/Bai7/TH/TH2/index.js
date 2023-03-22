"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceLocation = void 0;
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilomitersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// const daysToMars = getDaysToLocation(kilomitersToMars);
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
var space = new SpaceLocation('Moon', kilometersToTheMoon);
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var daysToMars = new Spacecraft(spacecraftName, speedMph);
daysToMars.printDaysToLocation(space);
