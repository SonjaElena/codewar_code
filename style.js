// Baby shark lyrics generator

function babySharkLyrics() {
  let fWord = [
    "Baby shark",
    "Mommy shark",
    "Daddy shark",
    "Grandma shark",
    "Grandpa shark",
    "Let's go hunt",
  ];
  let all = "";

  for (let i = 0; i < fWord.length; i++) {
    let sentence = fWord[i] + ", " + "doo ".repeat(6) + "\n";
    all += sentence.repeat(3) + fWord[i] + "!\n";
  }

  return all + "Run away,...";
}
