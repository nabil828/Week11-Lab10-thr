// 6. Add “sugar” to the list of food unicorn Aurora loves to eat
unicorns = unicorns.map(
  (aUnicorn) => {
    if (aUnicorn.name == "Aurora") {
      aUnicorn.loves.push("sugar")
    }
    return aUnicorn
  }
)
console.log(unicorns);
