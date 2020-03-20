class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }


    push(data) {
        // If the stack is empty!
        if (this.top === null) {
            // we just add the node
            this.top = new _Node(data, null);
            return;
        }

        // if it is not empty
        // we create the node but we assign the
        // new node . next to point to the current
        // top.
        const node = new _Node(data, this.top);

        // Then we update the top to be the new node.
        this.top = node;
    }

    // Process the top of the stack
    pop() {
        // Grab the current top
        if(this.top === null) {
            return;
        }
        
        const node = this.top;

        // Change the top to the next one!
        this.top = node.next;

        // Return the top we grabed before
        // changing this.top
        return node.data;
    }

    remove(data) {
        let currentNode = this.top;

        let previousNode = this.top;

        while ((currentNode !== null) && (currentNode.data !== data)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if(currentNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currentNode.next;
    }

    peek() {
        console.log(this.top);
    }

    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }
    }

    display() {
        if (this.top === null) {
            console.log("Your stack is empty");
            return;
        }

        let currentNode = this.top;

        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        return;
    }
}


class Queue {
    constructor() {
        this.first = null; // head
        this.last = null; // tail
    }
    // Adds to the queue
    enqueue(data) {
        // Create a note!
        const node = new _Node(data);
        // If the queue is empty, 
        // we add the new node as
        // the first item.
        if (this.first === null) {
            this.first = node;
        }
        // If there is a last item!
        // we add the node to th next
        // after the last.
        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last 
        //item on the queue
        this.last = node;
    }
    // Takes from the queue - 
    // like we pop() from a stack
    // but here is called dequeue.
    dequeue() {
        // Queue is empty, do nothing.
        if (this.first === null) {
            return;
        }
        // save the first one somewhere
        // to use later
        const node = this.first;
        // now the second one becomes
        // the first one.
        this.first = this.first.next;
        // if node happpens to be the last one
        // then empty the last one.
        // Now queue is empty.
        if (node === this.last) {
            this.last = null;
        }
        // returns the value.
        return node.data;
    }
}

//1. Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
// const starTrek = new Stack();

// starTrek.push("Kirk");
// starTrek.push("Spock");
// starTrek.push("McCoy");
// starTrek.push("Scotty");

// //starTrek.peek();

// //console.log(starTrek.isEmpty());

// starTrek.remove("McCoy");

// starTrek.display();

//#3 Write an algorithm that uses a stack to determine whether a given input is palindrome or not.
// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
//     const firstHalf = s.slice(0, s.length/2); //this also ignores the middle character of an odd numbered word, which is what we want
//     const lastHalf = s.slice(s.length/2 + 1); //this is the last half of the string

//     const palendromeTest = new Stack();

//     //add each character of the first half into a stack
//     for (let i = 0; i < firstHalf.length; i++) {
//         palendromeTest.push(firstHalf[i]);
//     }

//     //pop each item off the stack and compare to the last half
//     for (let i = 0; i < lastHalf.length; i++) {
//         let currentChar = palendromeTest.pop();
//         if (currentChar !== lastHalf[i]) {
//             return false; //if at any point the characters do not match, it's not a palendrome
//         }
//     }
//     //if all match, it's a palindrome
//     return true;
// }


// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//#4 Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis.

// function isExpressionBalanced(expression) {
//     //need to pull all of the ( and the ) out of the expression

//     const parentheses = expression.split("").filter(char => ((char === "(") || (char === ")")));
//     //push and opening parenthesis into the stack
//     //any closing parenthesis would need to have an opening one before it (i.e. already in the stack)
//     //so if we have a closing parenthesis, we pop from the stack. if the stack is ever empty when this happens, it means we're missing an opening bracket.
//     //after travesring all the parenthesis, if anything is left in the stack, that means we have an extra opening.
//     let expressionStack = new Stack();

//     for (let i = 0; i < parentheses.length; i++) {
//         if (parentheses[i] === "(") {
//             expressionStack.push(parentheses[i]);
//         } else if (parentheses[i] === ")") {
//             let char = expressionStack.pop();
//             if(char === undefined) {
//                 return console.log(`You are missing a "("`);
//             }
//         }
//     }

//     if(!expressionStack.isEmpty()) {
//         return console.log(`You are missing a ")"`);
//     }
//     return console.log("Your expression is balanced");
// }

// isExpressionBalanced("((((()))");