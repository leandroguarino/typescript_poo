"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerRepository_1 = __importDefault(require("../repositories/CustomerRepository"));
const CustomerService_1 = __importDefault(require("../services/CustomerService"));
class CustomerController {
    static create(data) {
        if (data.name && data.age && data.phone) {
            const customerService = new CustomerService_1.default(new CustomerRepository_1.default());
            customerService.create(data);
        }
        else {
            throw "Bad Request";
        }
    }
    static findAll() {
        const customerService = new CustomerService_1.default(new CustomerRepository_1.default());
        return customerService.findAll();
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map