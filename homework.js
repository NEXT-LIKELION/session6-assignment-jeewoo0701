const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "charlie", age: 19 }
  ];
  const update = users.map(({ name, age }) => {
    const status = age >= 19 ? "성인" : "미성년자";
    return { name, age, status };
  });
  
  console.log(update);

  const person = {
    name: "David",
    city: "London",
    age: 30
  };
  
  for (let key in person) {
    if (typeof person[key] === "string") {
      person[key] = `${person[key]} (확인됨)`;
    }
  }
  
  console.log(person);
  const words = ["apple", "banana", "cherry", "fig", "fig", "grape", "melon"];

  const filteredWords = [];
  
  for (let word of words) {
    if (word.length >= 5) {
      filteredWords.push(word);
    }
  }
  
  console.log(filteredWords);

  const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const squared = evenNumbers.map(num => num ** 2);
  const sum = squared.reduce((acc, val) => acc + val, 0);
  console.log(sum);
  
  const jsonString = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" }
  ];
  
  const result = jsonString.map(({ id, name, age }) => {
    return { id, name, age };
  });
  
  console.log(result);

  const user = {
  id: 101,
  name: "Eve",
  email: "eve@example.com",
  role: "admin"
};

function getuserdata(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    return "키 없음";
  }
}

console.log(getuserdata(user, "name"));  
console.log(getuserdata(user, "email"));  
console.log(getuserdata(user, "age"));    
