import ICreateCustomerDTO from "../dto/ICreateCustomerDTO";
import CustomerRepository from "../repositories/CustomerRepository";
import CustomerService from "../services/CustomerService";

export default class CustomerController{

    static create(data: ICreateCustomerDTO){
        if (data.name && data.age && data.phone){
            const customerService: CustomerService = new CustomerService(new CustomerRepository())
            customerService.create(data)
        }else{
            throw "Bad Request"
        }
    }

    static findAll(){
        const customerService: CustomerService = new CustomerService(new CustomerRepository())
        return customerService.findAll()
    }

}