const facts = [ // Array of random facts about me
    "I'm a student at University of Witwatersrand.",
    "I'm a car guy.",
    "My second name is 'Bernard'.",
    "My home language is Sepedi.",
    "I finished matric in 2021.",
    "I have two brothers.",
    "I want a pet, preferably a dog.",
    "I'm a gamer.",
    "I work for a charity organization in my spare time",
    "I love interior design.",
    "I've learnt how to code in C#, HTML, JavaScript and CSS."
  ];
  
  function generateFact() { //function that generates random facts

    const randomIndex = Math.floor(Math.random() * facts.length); // Generate a random index within the range of the facts array
    return facts[randomIndex]; // Return the fact
  }
  