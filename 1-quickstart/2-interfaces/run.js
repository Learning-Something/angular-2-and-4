"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../1-classes/animal");
var dao = new animal_dao_1.AnimalDao();
dao.insert(new animal_1.Animal('Rex'));
//# sourceMappingURL=run.js.map