// let my_name = `jeeten`;
// console.log(my_name);


// for (let val of my_name) {
//     console.log(val);
// }

// let my_info = {
//     my_name: `jeeten`,
//     sur_name: `panchal`,
//     location: `anywhere`,
// }


// for (let inf in my_info) {
//     console.log(`${inf} = ${my_info[inf]}`);
// }

// let marks = [54, 54, 54, 87, 87, 89, 98];
// let sum = 0;

// for (i = 0; i < marks.length; i++) {
//     sum += marks[i];
//     console.log(sum);
// }
// let result_class = sum / marks.length;
// console.log(result_class);


// let amount = [54, 59, 581, 45815, 15815, 15, 11, 1411, 1410, 174, 74784];

// let discount = 10;
// let finel = [];

// for (i = 0; i < amount.length; i++) {
//     let acount = (amount[i] * discount) / 100;
//     finel = amount[i] - acount;
//     console.log(finel);
// finel.push(total);

// }
// console.log(finel);



// let finaleprice = [];

// for (let i = 0; i < amount.length; i++) {
//     let disamount = (amount[i] * discount) / 100;
//     // console.log(dis_amount);
//     let finaleprice = amount[i] - disamount;
//     finaleprice.push(disamount);
// }


// console.log(finaleprice);

// let num = ["hi", "jii", "kilo", "loo", "pilo", "klilo", "zero", "hundred"];
// let no = [541, 451, 414, 55, 84, 41, 84, 56, 4854];
// console.log(num);

// num.push(500);
// console.log(num);

// let minus = num.pop();
// console.log(num);
// console.log(minus);

// num.unshift("kilojk");
// console.log(num);

// num.shift();
// console.log(num);

// let plus = num.toString();
// console.log(plus); male new variable

// console.log(num.concat(no));

// console.log(num.slice(3, 6));

// console.log(num.splice(2, 0));


// function sum(x, y) {
//     let s = x + y;
//     return s;
// }

// console.log(sum(51, 1851));


// arrays methods
// let naam = ["jeeten", "jiten", "joten", "jiteen", "niteen", "hittin"];
// let num = [`145,41,47,4,4,4,444,`];

// naam.push(`khsrd`);
// console.log(naam);

// naam.pop();
// console.log(naam);

// not change in originale array
// let nom = num.toString()
// console.log(nom);

// console.log(naam.concat(num));

// naam.unshift("hahaha");
// console.log(naam);

// naam.shift()
// console.log(naam);

// console.log(naam.slice(2,4));

// naam.splice(2, 1, "ghurg");
// console.log(naam);

// function finaleprice(amount, discount) {
//     for (let i = 0; i <= amount.lenght; i++) {
//         let discount = (amount[i] * discount) / 100;
//         let price = amount[i] - discount;
//     }
//     return amount, discount;
// }

// console.log(finaleprice(500, 20));


// function statement(x, y) {
//     if (x <= y) {
//         console.log(`${y} is bigger then ${x} `)
//     } else if (x >= y) {
//         console.log(`${x} is bigger then ${y} `)
//     }

//     return x, y;
// }

// console.log(statement);
// console.log(statement(70, 60));

// let element = document.querySelector(".para")
// element.style.color = "yellow"

// element.style.color = "yellow"

// let element = document.getElementsByClassName("para")[0].style.color = "pink"
// console.log(element);

// let element = document.querySelector("a")
// element.style.color = "red"

// let nom = (x, y) => {
//     if (x > y) {
//         console.log(`${x} has less then ${y}`)
//     } else if (x < y) {
//         console.log(`${y} has less then ${x}`)
//     }
// }

// console.log(nom(50, 60));

// function my_word(msg) {
//     let count = 0;
//     for (const char of msg)
//         if (char === "j" || char === "a" || char === "i" || char === "t" || char === "o" || char === "p" || char === "h" || char === "s" || char === "k") {
//             count++;
//         };
//     console.log(count);
// };

// my_word("dhinga d poni dhinga");
// my_word("mukkadar ka sikan dar");

// let element = document.getElementsByClassName("para")[1].style.color = "red";

// function myprice(amount, discount) {
//     dis = (amount * discount) / 100
//     fineprice = amount - dis
//     return fineprice;
// }


// console.log(myprice(50, 73));

// let num = prompt("write here");
// console.log(num);
// num = Number.parseInt();
// console.log(typeof num);

// let prom = prompt("enter yout name");
// let jeeten = {
//     full_name: "panchal jeeten",
//     roll_no: 54,
// }

// if (prom === "jeeten") {
//     console.log(jeeten);
// }

// function stu(num) {

//     if (res <= 30) {
//         console.log("fail");
//     } else if (res >= 31 && res <= 50) {
//         console.log("b");
//     } else if (res >= 51 && res <= 80) {
//         console.log("a+");
//     } else if (res >= 81 && res <= 99) {
//         console.log("a++");
//     } else if (res >= 100) {
//         console.log("error");
//     }
//     return res;
// }

// console.log({ num, stu });

// let rank = prompt("enter your mark percentages");
// console.log(rank);

// if (rank <= 30) {
//     console.log("fail");
// } else if (rank >= 31 && rank <= 40) {
//     console.log("et");
// } else if (rank >= 41 && rank <= 60) {
//     console.log("good");
// } else if (rank >= 61 && rank <= 80) {
//     console.log("very good");
// } else if (rank >= 81 && rank <= 99.9) {
//     console.log("extremmly good");
// } else if (rank >= 100) {
//     console.log("error");
// }

// let myMarks = [52, 85, , 95, 5, 58, 49, 45, 89, 95];

// function remark(num) {
//     num * 5;
// }

// let finelmarks = myMarks.forEach(remark);

// console.log(finelmarks);

// let finelmarks2 = myMarks.map(remark);
// console.log(finelmarks2);

// let marks = [26, 58, 95, 35, 85, 74, 85, 96, 25];

// function mark2(num) {
//     // let dis = (num * 10) / 100
//     // num -= dis

//     // return num > 90;

// }

// function total(pre, aft) {
//     return pre < aft;
// }

// let merg = marks.reduce(total);
// console.log(merg);

// let finelmarks = marks.map(mark2);

// console.log(finelmarks);

// let high = marks.filter(mark2);
// console.log(high);

// let per = [96, 52, 48, 74, 15, 84, 45]
// let element = document.querySelector("ul").children;
// let element = document.querySelector("li").innerHTML = "<b>jeeten</b>";
// let element = document.querySelector(".para").innerText = "hi";
// element.style.background = "yellow";
// console.log(element);

// let element = document.querySelectorAll("ul");
// console.log(element);

// for (let li of element) {
//     console.log(li.style.display = "inline-block");
// }

// let element = document.getElementById("par");

// function jaadu() {
//     // element.style.fontWeight = 900;
//     element.in
// }
// let bt = document.getElementById("but");
// let cll = document.getElementsByClassName("button");
// console.log(cll);
// console.log(bt);


// let ss = alert("send susccsesfully");
// function myf() {
//     let cll = document.getElementById("but").innerHTML = alert("suscefully store u can back now!");
// }
// let date = document.getElementById("dat");
// let innp = document.getElementById("inp");

// function jaadu() {
//     date.style.color = "red";
//     innp.style.color="yellow";
//     console.log(date.value);
//     console.log(innp.value);
// }

// let button = document.getElementById("but");
// let para = document.getElementById("pr")

// button.addEventListener('click', function () {
//     para.innerHTML = "magic";
// })


// let uname = document.getElementById("uname"); //console.log(uname.value);
// let namero = document.getElementById("namero"); //console.log(namero.value);

// let mobile = document.getElementById("mobile"); //console.log(mobile.value);
// let mobilero = document.getElementById("mobilero"); //console.log(mobilero.value);

// let password = document.getElementById("password"); //console.log(password.value);
// let passwordero = document.getElementById("passwordero"); //console.log(passwordero.value);
// let male = document.getElementById("male")
// let female = document.getElementById("female")
// let other = document.getElementById("other")
// let genderer = document.getElementById("genderer")

// let x = document.getElementById("sport").value; console.log(x);

// let select = document.getElementById("sport");
// let optioner = document.getElementById("optioner"); console.log(optioner);

// let sport = document.getElementById("select-sport"); console.log(sport);

// function validation() {
//     if (uname.value == "") {
//         namero.style.color = "balck";
//         namero.style.borderBottom = "solid 3px red"
//         namero.innerHTML = "USER NAME IS REQUIRED";
//         event.preventDefault();
//     } else {
//         namero.style.color = "black";
//         namero.style.borderBottom = "solid 2px green "
//         namero.innerHTML = "USER NAME IS VALID";
//     }

//     if (mobile.value.length < 10 || mobile.value.length > 10) {
//         mobilero.style.color = "balck";
//         mobilero.style.borderBottom = "solid 3px red "
//         mobilero.innerHTML = "NOT VALID NO.";
//         event.preventDefault();
//     } else {
//         mobilero.style.color = "black";
//         mobilero.style.borderBottom = "solid 2px green "
//         mobilero.innerHTML = "VALID NO..";
//     }

//     if (password.value.length < 8 || password.value.length > 16) {
//         passwordero.style.color = "black";
//         passwordero.style.borderBottom = "solid 3px red "
//         passwordero.innerHTML = "MAX 8 OR MIN 16 DIGIT REQUIRED";
//         event.preventDefault();
//     } else {
//         passwordero.style.color = "black";
//         passwordero.style.borderBottom = "solid 2px green "
//         passwordero.innerHTML = "SUCESS";
//     }
//     if (male.checked == false && female.checked == false && other.checked == false) {
//         // console.log("yor are not selected your gender");
//         genderer.style.color = "black";
//         genderer.style.borderBottom = "solid 3px red "
//         genderer.innerHTML = "GENDER IS REQUIRED";
//         event.preventDefault()
//     }
//     else {
//         genderer.style.color = "balck";
//         genderer.style.borderBottom = "solid 2px green "
//         genderer.innerHTML = "GENDER CKECK";
//     }



// }

// function sel() {
//     let x = document.getElementById("sport").value; console.log(x);
//     let opt = document.getElementById("optioner")
//     // opt.innerHTML.style.color = "	rgb(0, 0, 255)"
//     opt.innerHTML = "YOU SELECT " + x
// }

// let nem = document.getElementById("name")
// console.log(nem)
// let nemer = document.getElementById("nemer")
// let err = document.getElementById("err")
// err.style.display = "none"
// let suc = document.getElementById("suc")
// suc.style.display = "none"
// let reg = /[0-9]/

// function valid() {
//     if (nem.value == "") {
//         nemer.style.color = "red"
//         nemer.innerHTML = "NAME IS REQUIRED"
//         err.style.display = "block"

//     } else if (reg.value !== reg.test(nem.value)) {
//         nemer.style.color = "red"
//         nemer.innerHTML = "NO. IS REQUIRED"
//         err.style.display = "block"

//     } else {
//         nemer.style.color = "green"
//         nemer.innerHTML = "NAME IS VALID"
//         err.style.display = "none"
//         suc.style.display = "block"
//     }
// }

let username = document.getElementById("name")
// console.log(username)
let reg = /[0-9]/
let mobile = document.getElementById("mobile")
let mobiler = /^[0-9]{10}$/
let mail = document.getElementById("email")
let mailer = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let pass = document.getElementById("pass")
let passer = /^[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/`~|\\-]{8,16}$/;
let pass2 = document.getElementById("pass2")

document.getElementById("submmit").addEventListener("click", function (event) {
    event.preventDefault();
    checkdata()
})

function checkdata() {
    // alert(username.value)

    if (username.value == "") {
        seterror(username, "USERNAME REQUIRIED");
    } else if (!reg.test(username.value)) {
        seterror(username, "NUMBER IS REQUIRED")
    } else {
        setsucess(username, "NAME IS VALID")
    }

    if (mobile.value == "") {
        seterror(mobile, "MOBILE NO.REQUIRIED")
    } else if (mobile.value.length <= 9 || mobile.value.length > 10) {
        seterror(mobile, "ONLY TEN DIGIT ACCEPTABLE ")
    } else {
        setsucess(mobile, "ACCEPT MOBILE NO.")
    }

    if (mail.value == "") {
        seterror(mail, "MAIL IS REQUIRIED")
    } else if (mailer.test(mail.value)) {
        setsucess(mail, "VALID EMAIL")
    } else {
        seterror(mail, "NOT VALID EMAIL")
    }

    if (pass.value == "") {
        seterror(pass, "PASSWOR IS REQUIRIED")
    } else if (passer.test(pass.value)) {
        setsucess(pass, "VALID PASSWORD")
    } else {
        seterror(pass, "MIN 8 AND MAX 16 LATTER")
    }

    if (pass2.value == "") {
        seterror(pass2, "PASSWORD REQUIRED")
    } else if (pass2.value === pass.value) {
        setsucess(pass2, "PASSWORD MATCHED")
    } else {
        seterror(pass2, "PASSWORD NOT MATCHED")
    }

}

function seterror(u, msg) {
    let parent = u.parentElement
    console.log(parent)
    parent.className = "input-box  error"
    let span = parent.querySelector("span")
    span.innerText = msg
    let iconer = parent.querySelector(".icon")
    iconer.className = "icon fa-solid fa-circle-exclamation"
    // console.log(iconer)
}

function setsucess(u, msg) {
    let parent = u.parentElement
    parent.className = "input-box sucess"
    let span = parent.querySelector("span")
    span.innerText = msg
    let iconer = parent.querySelector(".icon")
    iconer.className = "icon fa-solid fa-circle-check"
}