import CustomerController from "./src/controllers/CustomerController";
import ICreateCustomerDTO from "./src/dto/ICreateCustomerDTO";

CustomerController.create(
    {
        name: "sadsadasdsa",
        phone: "sadasdasdsa",
        age: 1231
    } as ICreateCustomerDTO
)

CustomerController.create(
    {
        name: "Jao",
        phone: "sadasdasdsa",
        age: 1231
    } 
)

console.log(CustomerController.findAll())