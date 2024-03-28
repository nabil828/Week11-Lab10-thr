// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter(u => u.loves.includes('apple'))

sum = 0
for (x of love_apples_arr) {
  sum += x.weight
}


console.log(sum / love_apples_arr.length);