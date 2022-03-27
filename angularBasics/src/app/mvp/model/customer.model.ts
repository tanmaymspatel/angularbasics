export class Customers {

    public id : number;
    public firstname : string;
    public lastname : string;
    public age : number;
    public gender : string;
    public city : string;

    constructor(
        id : number,
        firstname : string,
        lastname : string,
        age :  number,
        gender : string,
        city : string
    ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
}

export class CustomersForm {
    public firstname: string;
    public lastname: string;
    public age: number;
    public gender : string;
    public city : string;

    constructor(
      firstname: string,
      lastname: string,
      age: number,
      gender : string,
      city : string

    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.gender = gender;
      this.city = city;
    }
  }
