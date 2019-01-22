'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
	let firstNode = linkedlist.head
	let secondNode = firstNode.next;
	while(firstNode !== secondNode){
		if(firstNode === null || secondNode === null){
			return false
		}
		firstNode = firstNode.next
		secondNode = secondNode.next.next

	}
	return true
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
const findLoop = (linkedlist) => {
	let firstNode = linkedlist.head
	let secondNode = firstNode.next;
	while(firstNode !== secondNode){
		if(firstNode === null || secondNode === null){
			return false
		}
		firstNode = firstNode.next
		secondNode = secondNode.next.next

	}
	console.log("WE HAVE A LOOP!")
	firstNode = linkedlist.head
	while(firstNode !== secondNode){
		firstNode = firstNode.next
		secondNode = secondNode.next
	}
	return firstNode
}

module.exports = isLoop
