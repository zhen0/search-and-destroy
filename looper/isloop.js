"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let counter1 = 1;
  let counter2 = 2;

  while (linkedlist.getNthNode(counter2)) {
    let val2 = linkedlist.getNthNode(counter2);
    let val1 = linkedlist.getNthNode(counter1);

    if (val1 === val2) {
      return true;
    } else {
      counter1++;
      counter2 += 2;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
