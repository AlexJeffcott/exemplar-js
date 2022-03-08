import { strict as assert } from 'assert';
import isWindows from 'is-windows';

import { add } from './functionalPatterns';

console.log('|>> imported function should result in "2" ===>', add(1)(1));

const helloWorld = (): string => 'hello world!';
console.log('|>> arrow fn invocation gives "helloWorld!" ===>', helloWorld());

const obj = {
	first: [{ second: 'works' }]
};
console.log('|>> optional chaining should result in "works" ===>', obj?.first?.[0]?.second);

// import and use an amd module
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
console.log('|>> isWindows? ===>', isWindows());

// demonstrates use of node built-ins
assert.equal('hello world!', 'hello world!');
assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);

const twentyThree = await import('./functionalPatterns').then(({ inc20 }) => inc20(3));
console.log('|>> dynamically imported function should result in "23" ===>', twentyThree);
