


// 10. Get the second and third heaviest unicorns
unicorns = unicorns.sort(
  (a, b) => {
    if (a.weight > b.weight)
      return -1
    else
      return +1
  }
)
console.log(unicorns.slice(1, 3));
