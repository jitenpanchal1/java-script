let img = document.querySelectorAll(".s-img")
console.log(img)
let count = "0"

img.forEach(function (img, index) {
  img.style.left = `${index * 100}%`
})

function slid() {
  img.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`

  }
  )
}
function prep() {
  console.log("pre")
  count--
  if (count < 0) {
    count = img.length - 1
  }
  slid()

}
function nxtt() {
  console.log("nxtt")
  count++
  if (count >= img.length) {
    count = 0
  }
  slid()
}

// let data = [55, 484, 5814, 484]

// let fal = ["mango", "apple", "banana", "graps"]
// let mafal = document.getElementById("myfal")

// fal.forEach(function (nam) {
//     mafal.innerHTML += `<li>${nam}</li>`
// })
// function daf(nam) {
//     return nam * 2
// }

// console.log(data.forEach(daf))

// data.forEach(function(num){
//     console.log(num)
// })


// let a = document.getElementById("pre")


// data.forEach(function (nam, index) {
//     nam = `${nam * 2}`
//     a.innerHTML += ` ${nam}<br>`;
// })




// console.log(data);

