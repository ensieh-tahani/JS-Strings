let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

//JS Challenge 1
console.log(country.replace(" ", "-"));
//JS Challenge 2
city = city.trim();
console.log(city);
//JS Challenge 3
console.log(attraction.toLowerCase());
//JS Challenge 4
console.log(place.toUpperCase());
//JS Challenge 5
let newSentence = `I went to visit the ${attraction} in ${city}, right next to my ${place.toLowerCase()}. Now, I'm getting ready for my trip to ${country}!`;

console.log(newSentence);