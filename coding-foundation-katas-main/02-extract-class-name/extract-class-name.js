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
