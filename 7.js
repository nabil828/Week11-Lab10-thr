

// 7. Give all of the unicorns vaccine(set vaccinated to be true)
let unicorns = require('./data.js')

unicorns = unicorns.map(
  (aUnicorn) => {
    aUnicorn.vaccinated = true
    return aUnicorn
  }
)
console.log(unicorns);
