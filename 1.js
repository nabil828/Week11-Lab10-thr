// 1. Find the male unicorns weigh more than 700 pounds
result = unicorns.filter(
  aUnicorn => aUnicorn.gender == 'm' && aUnicorn.weight > 700
)
console.log(result);