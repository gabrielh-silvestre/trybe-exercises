const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

const sumEntrants = (entrants) => {
  const visitors = countEntrants(entrants);

  return Object.entries(visitors) // ideia de .reduce() pega do repositório do Israel Sant'Anna https://github.com/tryber/sd-016-b-project-zoo-functions/pull/53/files
    .reduce((acc, [ageCategory, peopleNumber]) => acc + prices[ageCategory] * peopleNumber, 0);
};

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  return sumEntrants(entrants);
}

module.exports = { calculateEntry, countEntrants };
