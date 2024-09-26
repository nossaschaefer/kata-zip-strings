function zipStrings(strA, strB) {
  let finalStr = "";

  let maxStr = Math.max(strA.length, strB.length); // find the longer string

  for (let i = 0; i < maxStr; i++) {
    if (i < strA.length) {
      finalStr += strA[i]; // Add character from strA
    }
    if (i < strB.length) {
      finalStr += strB[i]; // Add character from strB
    }
  }
  return finalStr;
}

//console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
