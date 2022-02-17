"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerController_1 = __importDefault(require("./src/controllers/CustomerController"));
CustomerController_1.default.create({
    name: "sadsadasdsa",
    phone: "sadasdasdsa",
    age: 1231
});
CustomerController_1.default.create({
    name: "Jao",
    phone: "sadasdasdsa",
    age: 1231
});
console.log(CustomerController_1.default.findAll());
//# sourceMappingURL=index.js.map