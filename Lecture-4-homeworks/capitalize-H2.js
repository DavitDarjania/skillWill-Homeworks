const start_text =
  "Although most people would argue that a sentence should be reasonably short, concise, and easy to follow, I am, at this very moment, constructing a massive, sprawling, and seemingly endless sentence that meanders through countless ideas, examples, and descriptive fragments—such as the image of a vast library where every book is connected to the next by invisible threads of meaning, or the feeling of wandering through a city where every street corner leads not to a conclusion but to another possibility, another clause, another digression—because the purpose here is not clarity or efficiency but rather the demonstration of how language can be stretched like an elastic band, extended beyond the usual limits of grammar and patience, piling one thought upon another, until the reader realizes that what they are witnessing is not so much a traditional sentence as an experiment in endurance, rhythm, and imagination, a linguistic marathon in which commas, dashes, and conjunctions take the place of rest stops, so that the thought flows on and on, uninterrupted, unbroken, unstoppable, like a river that refuses to acknowledge its delta, preferring instead to coil, to twist, to loop back upon itself, so that by the time this sentence finally, mercifully ends, it has transformed into something more than just a collection of words: it has become an experience, a test, and perhaps even a slightly overwhelming reminder of how far a sentence can go if you never let it stop.";

function capitalizeText(string) {
  return string
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeText(start_text));
