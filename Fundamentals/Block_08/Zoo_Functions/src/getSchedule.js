const data = require('../data/zoo_data');

const { species, hours } = data;
const annimalsName = species.map((specie) => specie.name);
const allDays = Object.keys(hours);

const hourTemplate = (weekDay) => (weekDay !== 'Monday'
  ? `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`
  : 'CLOSED');

const filterByExhibition = (weekDay) => (weekDay === 'Monday'
  ? 'The zoo will be closed!'
  : species
    .filter((specie) => specie.availability.includes(weekDay))
    .map((specie) => specie.name));

const zooHourCounstruct = () => allDays
  .reduce((acc, curr) => {
    acc[curr] = { officeHour: hourTemplate(curr), exhibition: filterByExhibition(curr) };
    return acc;
  }, {});

const zooHours = zooHourCounstruct();

const searchBySpecie = (searchSpecie) => allDays
  .filter((day) => zooHours[day].exhibition.includes(searchSpecie));

const searchByDay = (searchDay) => zooHours[searchDay];

const penguinsWorkAround = (scheduleTarget) => {
  const filteredDays = searchBySpecie(scheduleTarget);
  const tempArr = [...filteredDays];
  filteredDays[filteredDays.length - 1] = tempArr[tempArr.length - 2];
  filteredDays[filteredDays.length - 2] = tempArr[tempArr.length - 1];

  return filteredDays;
};

function getSchedule(scheduleTarget) {
  if (annimalsName.includes(scheduleTarget)) {
    if (scheduleTarget === 'penguins') {
      return penguinsWorkAround(scheduleTarget);
    }
    return searchBySpecie(scheduleTarget);
  }

  if (allDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: searchByDay(scheduleTarget) };
  }

  return zooHours;
}

module.exports = getSchedule;
