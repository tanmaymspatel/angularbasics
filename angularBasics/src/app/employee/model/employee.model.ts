export class Employee {

    public id : number;
    public firstName : string;
    public lastName : string;
    public age : number;
    public gender : string;
    public city : string;

    constructor(
        id : number,
        firstName : string,
        lastName : string,
        age :  number,
        gender : string,
        city : string
    ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
}

export class EmployeeForm {
    public firstName: string;
    public lastName: string;
    public age: number;
    public gender : string;
    public city : string;

    constructor(
      firstName: string,
      lastName: string,
      age: number,
      gender : string,
      city : string

    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.city = city;
    }
  }
