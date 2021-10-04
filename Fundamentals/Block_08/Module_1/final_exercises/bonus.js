const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte 1

const dragonDamage = () => {
  return Math.round(Math.random() * (dragon.strength - 15) + 15);
};

const warriorDamage = () => {
  return Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
};

const mageDamage = () => {
  return Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
};

const manaUsage = () => {
  mage.mana -= 15;
  return mage.mana < 15 ? 'Não possui mana suficiente' : mageDamage();
}

// Parte 2

const gameActions = {
  warriorAction: (callback) => {
    const damageDone = callback();

    warrior.damage = damageDone;
    dragon.healthPoints -= damageDone;
  },
};
