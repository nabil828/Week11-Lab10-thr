// 2. Find the unicorns that have no vampire field
result = unicorns.filter(
  (aUnicorn) => {
    if (aUnicorn.vampires == undefined)
      return aUnicorn
  }
)
console.log(result);