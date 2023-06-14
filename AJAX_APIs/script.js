// JSON.parse() is used for transform JSON string TO JS object
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';
let userObj = JSON.parse(userStr);
console.log(userObj);

// JSON.stringify() is used to transform JS object to JSON string
let newObj = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro",
};
let strObj = JSON.stringify(userObj);
console.log(strObj);
