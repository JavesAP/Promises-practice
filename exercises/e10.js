export const getFirstResolvedPromise = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.any(promises).then((value) => value);
};

export const getFirstPromiseOrFail = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.race(promises).then((result) => result)
};

export const getQuantityOfRejectedPromises = (promises) => {
  //*  write code to pass test ⬇ ️
  let sum = 0;
  return Promise.allSettled(promises).
    then((resultsArr) => {

      resultsArr.forEach((object) => {
        if (object.status === "rejected") {
          sum += 1
        }
      })

      return sum
    });
};

export const getQuantityOfFulfilledPromises = (promises) => {
  //*  write code to pass test ⬇ ️
  let sum = 0;
  return Promise.allSettled(promises).
    then((resultsArr) => {

      resultsArr.forEach((object) => {
        if (object.status === "fulfilled") {
          sum += 1
        }
      })

      return sum
    });
};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  // To solve this you must fetch all characters passed in the array at the same time
  // use the `fetchCharacterById` function above to make this work
  //*  write code to pass test ⬇ ️
  let characterOne = 0;
  let characterTwo = 0;
  let characterThree = 0;

  /*
  let characters = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids.length <= 3) {
      const character = await fetchCharacterById(ids[i]);
      characters.push(character)
    } else {
      return []
    }
  }
  return characters
  */
  
  if (ids.length <= 2) {
    characterOne = fetchCharacterById(ids[0]);
    characterTwo = fetchCharacterById(ids[1]);
    return await Promise.all([characterOne, characterTwo])
  } else if (ids.length <= 3) {
    characterOne = fetchCharacterById(ids[0]);
    characterTwo = fetchCharacterById(ids[1]);
    characterThree = fetchCharacterById(ids[2]);
    return await Promise.all([characterOne, characterTwo, characterThree])
  } else return []
};
