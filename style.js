// 7 kyu - Who's Online?
const whosOnline = (friends) => {
  let users = {
    online: [],
    offline: [],
    away: [],
  };

  for (let i = 0; i < friends.length; i++) {
    const user = friends[i];
    if (user.status === "offline") {
      users.offline.push(user.username);
    } else if (user.status === "online" && user.lastActivity <= 10) {
      users.online.push(user.username);
    } else {
      users.away.push(user.username);
    }
  }
  if (users.online.length === 0) {
    delete users.online;
  }
  if (users.offline.length === 0) {
    delete users.offline;
  }
  if (users.away.length === 0) {
    delete users.away;
  }

  return users;
};

// 7 kyu - Highest and Lowest - version 1
function highAndLow(numbers) {
  let testen = numbers.split(" ");
  testen = testen.map((str) => parseInt(str));

  return [Math.max(...testen), Math.min(...testen)].join(" ");
}

// 7 kyu - Highest and Lowest - version 2
function highAndLow(numbers) {
  const nummern = numbers.split(" ").map(Number);
  const maxZahl = Math.max(...nummern);
  const minZahl = Math.min(...nummern);

  return `${maxZahl} ${minZahl}`;
}

//  8 kyu - Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

// 8 kyu - Calculate BMI
function bmi(weight, height) {
  let gewicht = weight / (height * height);

  if (gewicht <= 18.5) {
    return "Underweight";
  } else if (gewicht <= 25) {
    return "Normal";
  } else if (gewicht <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// 8 kyu - Name Shuffler
function nameShuffler(str) {
  let testen = 0;
  testen = str.split(" ");
  return testen[1] + " " + testen[0];
}

// 7 kyu - Band name generator
function bandNameGenerator(str) {
  if (str.substring(0, 1) === str.substring(str.length - 1)) {
    return str.charAt(0).toUpperCase() + str.slice(1).repeat(2);
  } else {
    return "The " + str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// 8 kyu - Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// 8 kyu - Cat years, Dog years
let humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};

// 7 kyu - Descending Order
function descendingOrder(n) {
  let neu = n
    .toString()
    .split("")
    .map((str) => parseInt(str));

  let sortedarray = neu.sort(function (a, b) {
    return b - a;
  });

  return parseInt(sortedarray.join(""));
}

// 8 kyu - Array plus array
function arrayPlusArray(arr1, arr2) {
  let summe = 0;
  let arr = 0;

  arr = arr1.concat(arr2);

  for (let i = 0; i < arr.length; i++) {
    summe += arr[i];
  }
  return summe;
}

// 8 kyu - Sum without highest and lowest number

function sumArray(array) {
  let summe = 0;

  if (!array || array.length < 2) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      summe += array[i];
    }

    summe = summe - Math.max(...array);
    summe = summe - Math.min(...array);
    return summe;
  }
}

// 8 kyu - Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}

// 8 kyu - Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let array = arr1.concat(arr2);
  let finalArr = [];
  function sortFunction(a, b) {
    if (a - b < 0) {
      return -1;
    } else {
      return 1;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (finalArr.indexOf(array[i]) === -1) {
      finalArr.push(array[i]);
    }
  }
  return finalArr.sort(sortFunction);
}

// 7 kyu - Get the Middle Character
function getMiddle(s) {
  let halve = s.length / 2;
  if (s.length % 2 === 0) {
    return s.slice(halve - 1, halve + 1);
  } else {
    return s.slice(halve, halve + 1);
  }
}

// 7 kyu - Number of People in the Bus
let number = function (busStops) {
  let resultein = 0;
  let resultaus = 0;

  for (let i = 0; i < busStops.length; i++) {
    for (let y = 0; y < busStops[i].length; y++) {
      if (y === 0) {
        resultein = resultein + busStops[i][y];
      } else {
        resultaus = resultaus + busStops[i][y];
      }
    }
  }
  return resultein - resultaus;
};

// 8 kyu - Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove(string) {
  if (string.charAt(string.length - 1) === "!") {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

// 8 kyu - Remove String Spaces
function noSpace(x) {
  return x.replace(/\s/g, "");
}

// 8 kyu - Counting sheep...
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

// 8 kyu - Sum of positive
function positiveSum(arr) {
  let summe = arr.filter(function (arr) {
    return arr > 0;
  });

  let fin = 0;

  for (let i = 0; i < summe.length; i++) {
    fin += summe[i];
  }

  return fin;
}

// 8 kyu - Return Negative
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else if (num <= 0) {
    return num;
  }
}

// 8 kyu - Opposite number
function opposite(number) {
  return -number;
}

// 8 kyu - Invert values
function invert(array) {
  let invnr = [];
  for (let i = 0; i < array.length; i++) {
    invnr.push(-array[i]);
  }
  return invnr;
}

// 8 kyu - Multiply
function multiply(a, b) {
  return a * b;
}

// 8 kyu - Reversed Strings
function solution(str) {
  const draft = str.split("");
  const resu = draft.reverse();
  const fin = resu.join("");

  return fin;
}

// 8 kyu - Abbreviate a Two Word Name
function abbrevName(name) {
  let words = name.split(" ");
  let letters = [];

  for (i = 0; i < words.length; i++) {
    letters.push(words[i].charAt(0).toUpperCase());
  }
  return letters.join(".");
}

// 8 kyu - Sum Arrays
// Sum Numbers
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let summe = 0;
  for (let i = 0; i < numbers.length; i++) {
    summe += numbers[i];
  }
  return summe;
}

// 8 kyu - String repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

// 8 kyu - Convert a String to a Number!
const stringToNumber = function (str) {
  let finnumb = Number(str); // put your code here
  return finnumb;
};

// Baby shark lyrics generator - still with bug

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

// Likes Vs Dislikes
function likeOrDislike(buttons) {
  if (buttons.length < 1) {
    return "Nothing";
  } else if (buttons.length === 1) {
    return buttons;
  } else if (
    buttons.lenght === 2 &&
    buttons[buttons.length - 1] === buttons[buttons.length - 2]
  ) {
    return "Nothing";
  } else if (buttons[buttons.length - 1] !== buttons[buttons.length - 2]) {
    return buttons[buttons.length - 1];
  } else if (
    buttons[buttons.length - 1] === buttons[buttons.length - 2] &&
    buttons[buttons.length - 2] === buttons[buttons.length - 3]
  ) {
    return buttons[buttons.length - 1];
  }
}

// 7 kyu - Alphabet war
function alphabetWar(fight) {
  let leftside = [];
  let rightside = [];

  fight = fight.split("");

  leftside = { w: 4, b: 3, p: 2, s: 1 };
  rightside = { m: 4, q: 3, d: 2, z: 1 };

  let leftoutput = 0;
  let rightoutput = 0;

  for (let i of fight) {
    if (leftside[i]) {
      leftoutput += leftside[i];
    } else if (rightside[i]) {
      rightoutput += rightside[i];
    }
  }

  if (leftoutput > rightoutput) {
    return "Left side wins!";
  } else if (leftoutput < rightoutput) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

// 7 kyu - Who is the killer?
function killer(suspectInfo, dead) {
  let suspects = Object.keys(suspectInfo);
  let murderer = [];

  for (let i in suspectInfo) {
    let saw = suspectInfo[i];

    let übereinst = dead.every((a) => saw.includes(a));

    if (übereinst) {
      murderer.push(i);
    }
  }
  return murderer.join(", ");
}

// extract-class-name - recap-day
function extractClassName(sessionTitle) {
  sessionTitle = sessionTitle.split(" ");
  let year = sessionTitle[1];
  let monthletter = sessionTitle[2];

  const monthMap = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  let month = monthMap[monthletter];

  if (
    sessionTitle[0] === "Class" &&
    /^\d{4}$/.test(year) &&
    monthletter in monthMap
  ) {
    return "'" + year + "-" + month + "'";
  } else {
    return null;
  }
}

// 7 kyu - List Filtering
function filter_list(derinput) {
  let derinputzahl = [];

  derinput.forEach((element) => {
    if (typeof element !== "string") {
      derinputzahl.push(element);
    }
  });

  return derinputzahl;
}
