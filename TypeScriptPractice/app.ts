const person = {
  name: "max",
  age: 30
}

console.log(person.name)

let newArray: string[];
newArray.push("string")

let secondArray: (string|number)[]
secondArray.push(6)

let thirdArray = [6, "string"]
thirdArray.push(null)

let tuple: [number, string, number]

tuple = [7, "string", 8]

enum Role {ADMIN, READ_ONLY, AUTHOR};
