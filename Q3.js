class Person {
    constructor(name, age, email, address) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.address = address;
    }
  
        displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Email: ${this.email}`);
      console.log(`Address: ${this.address}`);
    }
  }
  
  
  let person1 = new Person('VK', 21, 'gvkesavan2003@gmail.com', '123 Main St, Chidambaram, India');
  person1.displayDetails();
  