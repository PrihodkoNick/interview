// написать функцию, add, чтобы вызов add(1)(2) вернул 3 (замыкания)

const add = (num) => {
  return (sum) => {
    return sum+num;
  } ;
}


console.log(add(1)(2)); // 3
console.log(add(3)(2)); // 5