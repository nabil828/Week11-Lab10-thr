// 5. Decrease unicorn Pilot’s number of vampires by 2
const unicorns = unicorns.map(
  aUnicorn => {
    if (aUnicorn.name == "Pilot") {
      aUnicorn = { ...aUnicorn, "vampires": aUnicorn.vampires - 2 }
    }
    return aUnicorn

  })
console.log(unicorns);

