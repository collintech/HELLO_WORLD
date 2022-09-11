var room = "billiards room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === 'ballroom') {
    weapon = poison;
}
if (suspect === 'Mr. Kalehoff') {
    solved = True;
}
else if (room === 'billiards room') {
    weapon = trophy;
}
if (suspect === 'Mrs. Sparr') {
    solved = True;
}
else if (room === 'gallery') {
    weapon = pool_stick;
}
if (suspect === 'Ms. Van Cleve') {
    solved = True;
}
else if (room === 'dining room') {
    weapon = Knife;
}
if (suspect == 'Mr. Parkes') {
    solved = True;
}

if (solved) {
    console.log(suspect + "did it in the " + room + "with" + weapon)
}

// var isGoing = true;
// var color;
// if(isGoing){
//     color = "green";
// }
// else{
//     color = 'red';
// }


// Version 2

var isGoing = true;
var color;
if (isGoing) "green"; "red"
console.log(color);

var isQualified = true;
var Academic = isQualified ? "Educated" : "Uneducated";
console.log(Academic);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;
var category = eatsPlants ? (eatsAnimals ? "Omnivore" : "Herbivore") : (eatsAnimals ? "Omnivore" : "undefined") && (eatsAnimals ? "Carnivore" : "undefined");
console.log(category);

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = /* your code goes here */

    console.log(category);

var x = 1;

while (x < 20) {
    if (x % 3 === 0) {
        console.log("Julia");
    }
    else if (x % 5 === 0) {
        console.log("James");
    }
    else if (x % 3 === 0 && x % 5 === 0) {
        console.log("Julia James")
    }
    else {
        console.log(x)
    }
    x += 1;
}

// A Function that prints a triangle shape with asteriks
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    var triangle = "";
    var line_number = 1;

    for (line_number = 1; line_number < length; line_number++) {
        triangle = triangle + makeLine(line_number);
    }

    return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});


/*
// Method 2
var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
*/
console.log(totals);

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (row = 0; row < numbers.length; row++) {
    for (col = 0; col < numbers[row].length; col++) {
        if (numbers[row][col] % 2 === 0)
            // numbers[row[col]] = numbers[row][col].toFixed();
            numbers[row][col] = "even";

        else
            numbers[row][col] = "odd";


    }
}
console.log(numbers);

// * QUIZ REQUIREMENTS
// * - Your code should have an object `facebookProfile`
// * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
// * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
// * - Carefully implement the desired functionality of each method, as decribed above
// */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
    name: "Collins",
    friends: ["Chima", "Emmanuel", "Peterson", "Dwayne", "Mike", "Favour", "Amanda", "Paul"],
    messages: ["Happy Birthday", "Congratulations", "Nice Picture", "Thumbs up"],

    postMessage: function post(message) {
        var newMessage = "";
        newMessage += facebookProfile.messages;
        return newMessage.push("Long TIme, No See");
    },

    deleteMessage: function removeMessage(index) {
        delMessage = facebookProfile[messages.splice(2, 1, "Fresh Guy")];
        return "The message " + delMessage + "at the index 2 has been replaced with " + delMessage;
    },

    addFriend: function add() {
        newFriend = "";
        for (friend = 0; friend < facebookProfile.friends.length; friend++);
        newFriend = facebookProfile.friends.push();
        return newFriend + "was added at the last position";
    },

    removefriend: function substract() {
        substracted = facebookProfile.friends.pop();
        return substracted;
    }

};

console.log(facebookProfile.friends(removefriend()));