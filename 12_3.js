// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter(u => u.loves.includes('apple'))

result = love_apples_arr.reduce(
  (sum, aUnicorn) => {
    return sum + aUnicorn.weight
  },
  0
)

console.log(result / love_apples_arr.length);