// 9. Sort the unicorns based on the names increasingly, then the number of vampires decreasingly

unicorns = unicorns.sort(
  (a, b) => {
    if (a.name == b.name) {
      if (a.vampires > b.vampires)
        return -1
      else
        return +1
    }
    else if (a.name < b.name)
      return -1
    else
      return +1
  }
)
console.log(unicorns);
