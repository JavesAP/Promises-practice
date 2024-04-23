/**
 * PROMISE CONSTRUCTOR (Reject with onRejected callback argument)
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 */

/**
 * @task
 * Create a function that returns a promise with a constructor that follows the requirements:
 * * Has a name of 'getPromise'
 * * Takes a boolean as an argument
 * * Returns a promise constructor that creates a promise that:
 * * * resolves with a value of 'The PROMISE was RESOLVED' if the argument is true
 * * * rejects with a reason of 'The PROMISE was REJECTED' if the argument is false
 * The getPromise function must be exported
 * Example: export const getPromise = (bool) = return <Your promise constructor code>
 */

export const getPromise = (bool) => {
  // Your code goes here...
  const newPromise = new Promise((resolve) => {
    resolve('The PROMISE was RESOLVED')
  });

  const secondProm = new Promise((reject) => {
    reject('The PROMISE was REJECTED')
  });

  if (bool) {
    return newPromise
  } else {
    return secondProm
  }
};

/**
 * Create a handlePromise function that follows:
 * * Takes a promise as an argument. The promise will either resolve or reject
 * * If the promise rejects make handlePromise return "Uh Oh"
 * * If it resolves make it return its resolved value
 * * The Promise Consumer must use the onFulfilled and onRejected callback of .then()
 * The handlePromise() function must be exported
 */

export const handlePromise = (prom) => {
  // Your code goes here...
  return prom
    .then(
      (resolved) => resolved,
      //(resolved) => resolved,
      //(rejected) => rejected
    )
    .catch(() => {
      const newString = 'Uh Oh';
      console.log(prom);
      return newString
    })
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
