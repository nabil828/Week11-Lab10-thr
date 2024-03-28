// 3. Find the unicorns that like apples or carrots
const result = unicorns.filter(
  (aUnicorn) => aUnicorn.loves.includes('carrot') || aUnicorn.loves.includes('apple')
)
console.log(result.length); // 8