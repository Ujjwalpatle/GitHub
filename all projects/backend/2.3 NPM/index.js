//var generateName = require('sillyname');
import generateName from "sillyName";
var sillyName = generateName();
console.log(`my name is ${sillyName}`);


import superheroes from "superheros";
var hero = superheroes();
console.log(`I am ${hero}!`);

import { generateSillyPassword } from "silly-password-generator";
var password=generateSillyPassword();
console.log(`my password is ${password} ~~~`);