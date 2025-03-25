async function loaddata() {
  let feech = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await feech.json();
  //   console.log(data);
  data.forEach((e) => {
    console.log(e);
    let div = document.getElementById("datashow");
    let pa = document.createElement("p");
    pa.textContent =
      `id: ${e.id}, ` + `userId: ${e.userId}, ` + `Title: ${e.title}`;
    div.appendChild(pa);
  });
}

// loaddata()
