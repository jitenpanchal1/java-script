// class person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }

// let person1 = new person("jeeten", 21, "india");

// for (let data in person1) {
//   let result = `${data} :` + ` ${person1[data]}`;
//   let show = document.getElementById("showdetails");
//   let show2 = document.createElement("h1");
//   show.appendChild(show2).textContent = result;
// }

// class vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   car(carname) {
//     this.carname = carname;
//   }
// }

// let person2 = new vehicle("royal enfield", "guerilla 450", 2023);
// person2.car("sundari");
// console.log(person2)
// for (let data in person2) {
//   let result = `${data} :` + ` ${person2[data]}`;
//   let show = document.getElementById("showdetails");
//   let show2 = document.createElement("h2");
//   show.appendChild(show2).textContent = result;
// }
// console.log(person2);

class bancacount {
  constructor(acountnumber, balance = 0) {
    this.acountnumber = acountnumber;
    this.balance = balance;
  }

  deposite(amount) {
    if (amount) {
      //   console.log("pls enter positive amount");
      this.balance += amount;
      console.log(
        `deposite amount is ${amount} total balance is ${this.balance}`
      );
    }
    return;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("insuficient amount");
    } else {
      this.balance -= amount;
      console.log(
        `withdrawal amount is ${amount} total balance is ${this.balance}`
      );
    }
    return;
  }

  getbalance() {
    console.log(
      `this acounnt ${this.acountnumber} has ${this.balance} total balance`
    );
  }
}

let acount1 = new bancacount(220123, 5000);
acount1.withdraw(500);
acount1.getbalance();
console.log(acount1);
