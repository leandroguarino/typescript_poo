export default class Customer{
    private name: string
    private phone: string;
    private age?: number;

    constructor(name: string, phone: string, age?: number){
        this.name = name
        this.age = age
        this.phone = phone
    }

    setName(name: string){
        if (name.indexOf(" ") >= 0){
            this.name = name
        }
    }

    getName(){
        return this.name
    }
}