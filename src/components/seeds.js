import Chance from 'chance';

const chance = new Chance();

const numberOfUsers = 10;

const randNumsArray = [];

for (let i = 1; i < numberOfUsers + 1; i++) {
  randNumsArray.push({
    _id: i,
    name: chance.name(),
    randNum: Math.floor(Math.random() * 100 + 1),
    randColor: chance.color({ format: 'hex' }),
    score: 0,
  });
}

export default randNumsArray;
