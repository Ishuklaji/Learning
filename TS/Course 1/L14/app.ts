// Literal type

let data: number | string = 123;

function combine(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return (+a) + (+b);
  } 
  else
   return a.toString() + b.toString();
}

console.log(combine(10, 20, "as-number"));

console.log(combine("Ish", "shukla", "as-string"));
