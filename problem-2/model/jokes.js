var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "I dreamt I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.",
    "I called my woman to celebrate our first anniversary. And she just hung up. Doesn’t our separation mean anything to her?",
    "Two elephants meet a totally naked guy. After a while one elephant says to the other: “I really don’t get how he can feed himself with that thing!”",
];

function addJoke(joke) {
    jokes.push(joke)
}

module.exports = {
    addJoke: function(joke) { addJoke(joke);},
    allJokes: function(){return jokes},
    getRandomJoke: function(){return jokes[Math.floor(Math.random()*jokes.length)]}
}
