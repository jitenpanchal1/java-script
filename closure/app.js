function count(amount) {
  return function (dicounamount) {
    let famount = (amount / 100) * dicounamount;
    let favalue = amount - famount;
    return favalue;
  };
}

let kli = count(50);
console.log(kli(10));
