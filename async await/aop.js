// function demo() {
//     console.log("1")
//     console.log("2")
//     setTimeout(() => {
//         console.log("3")
//         console.log("4")
//         console.log("5")
//         console.log("6")
//     }, 2000)
//     console.log("7")
//     console.log("8")

// }

// demo()

// async function jaadu() {
//     console.log("1")
//     await console.log("2")
//     console.log("3")
// }

// jaadu()
// console.log("4")


// async function calldata() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts")
//   let show = await data.json()
//   return show

// }

// calldata().then((result) => {
//   let pri = document.getElementById("fetchdata")
//   pri.innerHTML = result[8]
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// })

// using event

async function mergedata() {
  let feech = await fetch("https://jsonplaceholder.typicode.com/users")
  if (feech.ok) {
    let showe = await feech.json()
    console.log(showe);

    let seedata = document.getElementById("seedata")

    showe.map((data) => {
      let p = document.createElement("p")
      p.textContent = `${data.id} ` + ` ${data.name}`
      seedata.appendChild(p)
    })

  } else {
    console.log("data not dound")
  }
}

