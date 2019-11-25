var uniqueRandomArray = require('unique-random-array')
var words = require ('./words.json'); // creating an object using class requuire

module.exports = {
all: words,
random:uniqueRandomArray(words)
};