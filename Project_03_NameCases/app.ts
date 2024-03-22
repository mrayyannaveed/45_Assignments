let personName = "Rayyan Naveed";
console.log("Lower Case" +personName.toLowerCase());
console.log("Upperr Case" +personName.toUpperCase());
console.log("Title Case" +
  personName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
);
