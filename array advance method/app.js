let a = [45, 58, 58, 65, 7889];
console.log(a);
let b = a.map((faf, index, haha) => {
  console.log(index, faf, haha);
  return faf * 2;
});
console.log(b);

let c = a.filter((data) => {
  if (data > 60) {
    console.log("data that up to 60", data);
  }
});

let d = a.reduce((r1, r2) => {
  return r1 + r2;
});

console.log(d)
