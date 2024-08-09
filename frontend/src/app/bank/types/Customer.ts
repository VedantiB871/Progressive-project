export class Customer {
<<<<<<< HEAD
  

   
}





=======
    customerId?: string;
    name: string;
    email: string;
    password:string;
    username:string;
    role?:string;
  
      constructor(data:any) {
          this.customerId = data.customerId;
          this.name = data.name;
          this.email = data.email;
          this.username = data.username;
          this.password = data.password;
          this.role = data.role;
      }
  
      displayInfo() {
          console.log(`Customer ID: ${this.customerId}`);
          console.log(`Name: ${this.name}`);
          console.log(`Email: ${this.email}`);
          console.log(`Username: ${this.username}`);
          console.log(`Password: ${this.password}`);
          console.log(`Role: ${this.role}`);
          console.log("------");
      }
  }
  
  
  
  
  
  
>>>>>>> f3197fdd32466276040695cf9cb7cc733e99b42f
