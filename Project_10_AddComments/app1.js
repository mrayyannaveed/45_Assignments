"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// In this program we store a person's name with white spaces
var white_space_character = "\n \tRayyan Naveed\t \n";
// then print once with white spaces
console.log("White Spaces Character: ", white_space_character);
// And then remove these white spaces from start and end 
var stripped_name = white_space_character.trim();
// then print once without white spaces
console.log("Without White Spaces Character: ", stripped_name);
