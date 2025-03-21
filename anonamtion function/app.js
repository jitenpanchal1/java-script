// let reapet = document.getElementById("reapet")
// let single = document.getElementById("single")

// setInterval(() => {
//     reapet.innerHTML = "chal"
//     // for (let i = 0; i <= 5; i++)
//     {
//         document.write("hii")
//     }
// }, 2000);

// setTimeout(() => {
//     document.write("ooo")
// }, 3000);


let imgs = document.getElementsByClassName("img")
console.log(imgs)
let cont = 0

function src() {
  for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i])
    imgs[i].style.display = "none"
    // imgs[i].style.left = `${imgs[i] * 100}%`
  }

  // imgs[i].style.left = `${imgs[i] * 100}%`
  // imgs[cont].style.transform = `translateX${cont * 100}%`

  if (cont >= imgs.length) {
    cont = 0
  }
  // imgs[cont].style.left = `${cont * 100}%`
  imgs[cont].style.display = "block"
  cont++
  console.log(cont)
  setTimeout(src, 2000)
}
src()

// let img = document.querySelectorAll(".img")
// console.log(img)
// let count = 0

// img.forEach(function (ing, index) {
//   ing.style.left = `${index * 100}%`
// })





