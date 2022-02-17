"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(name, phone, age) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    setName(name) {
        if (name.indexOf(" ") >= 0) {
            this.name = name;
        }
    }
    getName() {
        return this.name;
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map