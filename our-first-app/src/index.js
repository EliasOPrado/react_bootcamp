import foods from './foods';
import {choice, remove} from './helpers';

// randomly dra a fruit from the array
let fruit = choice(foods);

// log the message "I'd like one RANDOMFRUIT, please"
console.log(`I'd like one ${fruit}, please`)

// log the message "Here you go: RANDONFRUIT"
console.log(`Here you go: ${fruit}`);

// log the message "Delicious! May I have another?"
console.log(`Delicious! May I have another?`);

// Remove the fruit from the array if fruits
let remaining = remove(foods,fruit);

// log the message "I am sorry we are all out. We have FRUITSLEFT left"
console.log(`I am sorry we are all out. We have ${remaining} left`)