// class nume {
//     constructor(nam, age) {
//         this.nam = nam
//         this.age = age
//     }
//     info(home_no, street, district, state, pin_cod, country) {
//         this.home_no = home_no;
//         this.street = street;
//         this.district = district;
//         this.state = state;
//         this.pin_cod = pin_cod;
//         this.country = country
//     }
// }

// class wwe extends nume {
//     coll() {
//         console.log("jajantram mamntram")
//     }
// }

// let person_1 = new nume("manju", 1500,)
// person_1.info("A/161", "Chandlodia", "Ahmedabad", "Gujrat", 382481, "India")
// console.log(person_1)

// let person_2 = new wwe()
// person_2.info("A/161", "murlidhar", "sarlkaari", "florida0", 515478, "fhrb")
// person_2.coll()
// console.log(person_2)


// class wwf extends wwe {
//     pichaku() {
//         console.log("tiiiiiiiiiiiiiii......")
//     }
// }

// let person_3 = new wwf()
// person_3.info("fhg/20", "chadodiya", "afganistan", "kutumbminar", 589478, "chameli")
// person_3.pichaku()
// person_3.coll()
// console.log(person_3)


// class vehicle {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     info() {
//         console.log(`${this.brand}, ${this.model}, ${this.year}`)
//     }
// }



// let vahan = new vehicle("honda", "sp-125", 2015);
// vahan.info()
// console.log(vahan)


// console.log("one")
// console.log("two")
// console.log("three")
// console.log(one)
// console.log("four")
// console.log("five")


// console.log("one")
// console.log("two")

// setTimeout((nam) => {
//     console.log("say hiii")
// }, 5000);

// console.log("three")
// console.log("four")
// console.log("five")
// console.log("six")
// console.log("seven")

// this is Asynchronous example 

console.log("i am first")

function countdouwn() {
    let timeleft = 10

    function count() {
        if (timeleft >= 0) {
            console.log(timeleft)
            timeleft--;
            setTimeout(count, 1200)
        } else {
            console.log("time is up !")
        }
    }
    count()
}
countdouwn()

console.log("i am second no third i am late")








