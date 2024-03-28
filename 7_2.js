
unicorns = unicorns.map(
  (aUnicorn) => {
    return {
      ...aUnicorn,
      "vaccinated": aUnicorn.vaccinated = true
    }
  }
)
console.log(unicorns);