const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21savage": {
    stageName: "21 Savage",
    realName: "Shéyaa Bin Abraham-Joseph",
    age: 29,
    starSign: "Libra",
    birthDate: "October 22, 1992",
    birthPlace: "London, England",
    passedAway: false,
    deathNote: "alive",
  },
  asaprocky: {
    stageName: "ASAP Rocky",
    realName: "Rakim Athelaston Mayers",
    age: 33,
    starSign: "Libra",
    passedAway: false,
    deathNote: "alive",
  },
  bigl: {
    stageName: "Big L",
    realName: "Lamont Coleman",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 30, 1974",
    birthPlace: "Harlem, New York, USA",
    passedAway: true,
    deathNote: "Big L passed away on February 15, 1999",
  },
  biggiesmalls: {
    stageName: "Biggie Smalls",
    realName: "Christopher George Latore Wallace",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 21, 1972",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "The Notorious B.I.G. passed away on March 9, 1997",
  },
  cardib: {
    stageName: "Cardi B",
    realName: "Belcalis Marlenis Almánzar",
    age: 29,
    starSign: "Libra",
    birthDate: "October 11, 1992",
    birthPlace: "Washington Heights, New York, USA",
    passedAway: false,
    deathNote: "alive",
  },
  chancetherapper: {
    stageName: "Chance The Rapper",
    realName: "Chancelor Johnathan Bennett",
    age: 29,
    starSign: "Aries",
    birthDate: "April 16, 1993",
    birthPlace: "Chicago, Illinois, USA",
    passedAway: false,
    deathNote: "alive",
  },
  drake: {
    stageName: "Drake",
    realName: "Aubrey Drake Graham",
    age: 35,
    starSign: "Scorpio",
    birthDate: "October 24, 1986",
    birthPlace: "Toronto, Ontario, Canada",
    passedAway: false,
    deathNote: "alive",
  },
  eazye: {
    stageName: "Eazy-E",
    realName: "Eric Lynn Wright",
    age: 30,
    starSign: "Virgo",
    birthDate: "September 7, 1963",
    birthPlace: "Compton, California, USA",
    passedAway: true,
    deathNote: "Eazy-E passed away on March 26, 1995",
  },
  eminem: {
    stageName: "Eminem",
    realName: "Marshall Bruce Mathers III",
    age: 49,
    starSign: "Libra",
    birthDate: "October 17, 1972",
    birthPlace: "Saint Joseph, Missouri, USA",
    passedAway: false,
    deathNote: "alive",
  },
  jcole: {
    stageName: "J. Cole",
    realName: "Jermaine Lamarr Cole",
    age: 37,
    starSign: "Capricorn",
    birthDate: "January 28, 1985",
    birthPlace: "Frankfurt, Hesse, Germany",
    passedAway: false,
    deathNote: "alive",
  },
  juicewrld: {
    stageName: "Juice WRLD",
    realName: "Jarad Anthony Higgins",
    age: 21,
    starSign: "Sagittarius",
    birthDate: "December 2, 1998",
    birthPlace: "Chicago, Illinois, USA",
    passedAway: true,
    deathNote: "Juice WRLD passed away on December 8, 2019",
  },
  kanyewest: {
    stageName: "Kanye West",
    realName: "Kanye Omari West",
    age: 44,
    starSign: "Gemini",
    birthDate: "June 8, 1977",
    birthPlace: "Atlanta, Georgia, USA",
    passedAway: false,
    deathNote: "alive",
  },
  kendricklamar: {
    stageName: "Kendrick Lamar",
    realName: "Kendrick Lamar Duckworth",
    age: 35,
    starSign: "Gemini",
    birthDate: "June 17, 1987",
    birthPlace: "Compton, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  lilbaby: {
    stageName: "Lil Baby",
    realName: "Dominique Armani Jones",
    age: 27,
    starSign: "Sagittarius",
    birthDate: "December 3, 1994",
    birthPlace: "Atlanta, Georgia, USA",
    passedAway: false,
    deathNote: "alive",
  },
  liluzivert: {
    stageName: "Lil Uzi Vert",
    realName: "Symere Woods",
    age: 27,
    starSign: "Leo",
    birthDate: "July 31, 1994",
    birthPlace: "Philadelphia, Pennsylvania, USA",
    passedAway: false,
    deathNote: "alive",
  },
  macmiller: {
    stageName: "Mac Miller",
    realName: "Malcolm James McCormick",
    age: 26,
    starSign: "Capricorn",
    birthDate: "January 19, 1992",
    birthPlace: "Pittsburgh, Pennsylvania, USA",
    passedAway: true,
    deathNote: "Mac Miller passed away on September 7, 2018",
  },
  meekmill: {
    stageName: "Meek Mill",
    realName: "Robert Rihmeek Williams",
    age: 35,
    starSign: "Taurus",
    birthDate: "May 6, 1987",
    birthPlace: "Philadelphia, Pennsylvania, USA",
    passedAway: false,
    deathNote: "alive",
  },
  megantheestallion: {
    stageName: "Megan Thee Stallion",
    realName: "Megan Jovon Ruth Pete",
    age: 27,
    starSign: "Aquarius",
    birthDate: "February 15, 1995",
    birthPlace: "San Antonio, Texas, USA",
    passedAway: false,
    deathNote: "alive",
  },
  nas: {
    stageName: "Nas",
    realName: "Nasir Jones",
    age: 48,
    starSign: "Virgo",
    birthDate: "September 14, 1973",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: false,
    deathNote: "alive",
  },
  nickiminaj: {
    stageName: "Nicki Minaj",
    realName: "Onika Tanya Maraj",
    age: 39,
    starSign: "Sagittarius",
    birthDate: "December 8, 1982",
    birthPlace: "Port of Spain, Trinidad and Tobago",
    passedAway: false,
    deathNote: "alive",
  },
  nipseyhussle: {
    stageName: "Nipsey Hussle",
    realName: "Ermias Joseph Asghedom",
    age: 33,
    starSign: "Leo",
    birthDate: "August 15, 1985",
    birthPlace: "Los Angeles, California, USA",
    passedAway: true,
    deathNote: "Nipsey Hussle passed away on March 31, 2019",
  },
  notoriousbig: {
    stageName: "The Notorious B.I.G.",
    realName: "Christopher George Latore Wallace",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 21, 1972",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "The Notorious B.I.G. passed away on March 9, 1997",
  },
  biggie: {
    stageName: "The Notorious B.I.G. / Biggie",
    realName: "Christopher George Latore Wallace",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 21, 1972",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "The Notorious B.I.G. passed away on March 9, 1997",
  },
  popsmoke: {
    stageName: "Pop Smoke",
    realName: "Bashar Barakah Jackson",
    age: 20,
    starSign: "Cancer",
    birthDate: "July 20, 1999",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "Pop Smoke passed away on February 19, 2020",
  },
  travisscott: {
    stageName: "Travis Scott",
    realName: "Jacques Webster II",
    age: 30,
    starSign: "Taurus",
    birthDate: "April 30, 1992",
    birthPlace: "Houston, Texas, USA",
    passedAway: false,
    deathNote: "alive",
  },
  trippieredd: {
    stageName: "Trippie Redd",
    realName: "Michael Lamar White IV",
    age: 23,
    starSign: "Gemini",
    birthDate: "June 18, 1999",
    birthPlace: "Canton, Ohio, USA",
    passedAway: false,
    deathNote: "alive",
  },
  tylerthecreator: {
    stageName: "Tyler The Creator",
    realName: "Tyler Gregory Okonma",
    age: 30,
    starSign: "Pisces",
    birthDate: "March 6, 1991",
    birthPlace: "Ladera Heights, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  wizkhalifa: {
    stageName: "Wiz Khalifa",
    realName: "Cameron Jibril Thomaz",
    age: 34,
    starSign: "Virgo",
    birthDate: "September 8, 1987",
    birthPlace: "Minot, North Dakota, USA",
    passedAway: false,
    deathNote: "alive",
  },
  xxxtentacion: {
    stageName: "XXXTentacion",
    realName: "Jahseh Dwayne Ricardo Onfroy",
    age: 20,
    starSign: "Aquarius",
    birthDate: "January 23, 1998",
    birthPlace: "Plantation, Florida, USA",
    passedAway: true,
    deathNote: "XXXTentacion passed away on June 18, 2018",
  },
  yg: {
    stageName: "YG",
    realName: "Keenon Daequan Ray Jackson",
    age: 32,
    starSign: "Pisces",
    birthDate: "March 9, 1990",
    birthPlace: "Compton, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  unKnown: {
    stageName: "unKnown",
    realName: "unKnown",
    age: "unKnown",
    starSign: "unKnown",
    birthDate: "unKnown",
    birthPlace: "unKnown",
    passedAway: "unKnown",
    deathNote: "unKnown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(rappers);
});

app.get("/api/:rapperName", (request, response) => {
  const rapperNameParam = request.params.rapperName
    .toLowerCase()
    .replace(/ /g, "");
  if (rappers[rapperNameParam]) {
    response.json(rappers[rapperNameParam]);
  } else {
    response.json(rappers["unKnown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
