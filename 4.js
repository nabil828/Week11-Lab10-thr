// 4. Find the female unicorns that either love apples or weigh less than 500 pounds
const result = unicorns.filter(
  aUnicorn => aUnicorn.gender == "f" && (aUnicorn.loves.includes('apple') || aUnicorn.weight < 500)
)
console.log(result); //3
