
let unicorns = require('./data.js')
unicorns = unicorns.map(
  (aUnicorn) => {
    return {
      ...aUnicorn,
      "vaccinated":  true
    }
  }
)
console.log(unicorns);