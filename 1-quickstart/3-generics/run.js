"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var cavalo_1 = require("./../1-classes/cavalo");
var dao = new dao_1.Dao();
var animal = new cavalo_1.Cavalo('titã');
dao.insert(animal);
//# sourceMappingURL=run.js.map