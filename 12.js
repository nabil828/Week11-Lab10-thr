
// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter(u => u.loves.includes('apple'))
console.log(love_apples_arr);

sum = 0
for (let i = 0; i < love_apples_arr.length; i++) {
  sum += love_apples_arr[i].weight
}

console.log(sum / love_apples_arr.length);