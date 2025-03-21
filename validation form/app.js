// let nam = document.getElementById('name')
// console.log(nam)

// document.getElementById("click").addEventListener("click", function (event) {
//     event.preventDefault()
//     checkdata()
// })

// function checkdata() {
//     if (nam === "") {
//         console.log("empty")
//     }
// }

let nam = document.getElementById("name")

document.getElementById("click").addEventListener("click", function (event) {
    event.preventDefault();
    checkdata()
})

function checkdata() {
    if (nam.value == "") {
        seter(nam, "name is required")
    }

}

function seter(u, msg) {
    let parent = u.parentElement
    console.log(parent)
    parent.className = "input-box err"
    let span = parent.querySelector(".msg")
    span.innerText = msg
    let icon = parent.querySelector(".icon")
    // icon.className = "fa-solid fa-circle-check"
    icon.className = "icon fa-solid fa-circle-xmark"
}

// document.querySelector


