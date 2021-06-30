
// Given an Array print amount of positive numbers in Array

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i <= numbers.length; i++){
    if(numbers[i] >= 0){
        countPositives += 1;
    }
}
    
// your code here!
    
console.log("there are " + countPositives + " positive values");

// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY

// var floor = Math.floor(1.9)
// var ceil = Math.ceil(3.2)
// var random = Math.random()

// console.log(floor)
// console.log(ceil)
// console.log(random)



// --------------------------------------------------------------------

// function d6() {
//     var max = 6
//     var min = 1
//     var roll = Math.floor(Math.random() * (max - min + 1) + min);
//     return roll
// }

// var playerRoll = d6();
// console.log(playerRoll)

// Magic Eight-Ball:
// Using the following array, write a function that will answer all of our questions by randomly choosing a response.
// Our terminal should print out one of these answer upon calling on your function!
function eightBall(){
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
var results = Math.floor(Math.random() * lifesAnswers.length);
return lifesAnswers[results]
}

var answers = eightBall()
console.log(answers)


// ---------------------------------------------------------------



// console.log the pokémon objects whose id is evenly divisible by 3
// console.log the pokémon objects that have more than one type
// console.log the names of the pokémon whose only type is "poison"
// console.log the first type of all the pokémon whose second type is "flying"

var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
    
        
// console.log the pokémon objects that have more than one type

// for(var i = 0; i < pokemon.length; i++) {
//     if(pokemon[i].types.length > 1) {
//         console.log(pokemon[i].name);
//     }
// }



// console.log the pokémon objects whose id is evenly divisible by 3

// for(var i = 0;i < pokemon.length;i++){
//     if(pokemon[i].id % 3 == 0){
//     console.log(pokemon[i].name)
//     }
// }

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...
// for(var i=0; i<pokemon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokemon[i].name);
//     }
// }

// names of pokemon whose type is poison

// for(var i = 0;i < pokemon.length; i++){
//     if(pokemon[i].types[0] == "poison" && pokemon[i].types.length == 1){
//         console.log(pokemon[i].name)
//     }
// }

// console.log the first type of pokemon whose second type is flying

for(var i = 0;i < pokemon.length;i++){
    if(pokemon[i].types[1] == "flying"){
        console.log(pokemon[i].types[0])
    }
}




