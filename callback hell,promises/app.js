// function entry(dataId, callback) {
//     setTimeout(() => {
// console.log("dataId is", dataId)
// if (callback) {
//     callback()
// }
//     }, 2000)
// }

// entry(1, () => {
//     entry(2, () => {
//         entry(3, () => {
//             entry(4, () => {
//                 entry(5, () => {
//                     entry(6)
//                 });
//             });
//         });
//     });
// });

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log("datamaligyo")
//         if (i >= 10) {
//             console.log("slot is overload")
//         }
//     }, 2000);
// }

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//           console.log("data print")
//     }
// }, 2000);



// let promi = () => {
//     return new Promise((resolve, reject) => {
//         console.log("baari barsi khantgayaasi khatgenaya promise")
//         // resolve("good")
//         reject("very bad")
//     })
// }

// let test = promi();
// test.then((res) => {
//     console.log("aa gaya guru", res)
// }).catch((err) => {
//     console.log("go to home", err)
// })
// .finally(() => {
//     console.log("get out")
// })



// console.log(promi)

// function data(dataId, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId is", dataId)
//             resolve("good")
//             // reject("na tera nahi ho paayega")
//             if (callback) {
//                 callback()
//             }
//         }, 5000);
//     })
// }

// let rus = data(5768)
// console.log(rus)





// function data(mirej) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mirej) {
//                 resolve("data resolve")
//             } else {
//                 reject("data not available")
//             }
//         }, 2000)
//     })
// }


// data(false).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// function dataFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.3) {
//                 resolve("goood")
//             } else {
//                 reject("go to hell")
//             }
//         }, 2000)
//     })
// }


// dataFetch().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

function mypro() {
    return new Promise((resolve, reject) => {
        let book = 15
        if (book >= 10) {
            reject()
        } else {
            resolve()
        }
    })
}
let but = document.getElementById("red")
mypro().then(() => {
    but.classList.add("green")
    console.log("data pass")
}).catch(() => {
    but.classList.toggle("red")
    console.log("data fail")
})