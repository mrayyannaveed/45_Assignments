"use strict";
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
let result1 = city_country("Makkah", "SaudiaArabia");
console.log(result1);
let result2 = city_country("Tokyo", "Japan");
console.log(result2);
let result3 = city_country("Coala Lumpur", "Malaysia");
console.log(result3);
