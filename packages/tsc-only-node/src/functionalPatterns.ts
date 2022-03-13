/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-unsafe-return */
// unary function
// a function which takes one argument

// curried function (Named after Haskal Curry, the Haskal language is also named after him)
// All curried functions are a form of higher-order function.
// In mathematics and computer science, currying is the technique of converting a function
// that takes multiple arguments into a sequence of unary functions.
// For example, currying a function that takes three arguments creates three functions:
// x = f(a, b, c)
// becomes
// h = g(a)
// i = h(b)
// x = i(c)
// or
// const x = g(a)(b)(c)

// partial function (aka partial application)
// A function which has been applied to some, but not yet all of its arguments.
// In other words, it’s a function which has some arguments fixed inside its closure scope.
// A function with some of its parameters fixed is said to be partially applied.

// point-free style?
// A style of programming where function definitions do not make reference to the function’s
// arguments.

const add = (a: number) => (b: number) => a + b;
// add(2)(3); // => 5

// Generalization and specialization
// The returned function is just a specialized version of the more general add() function. We can use add() to create as many specialized versions as we want:

const inc = add(1);
// inc(3); // => 4

const inc10 = add(10);
// inc10(3); // => 13

const inc20 = add(20);
// inc20(3); // => 23

const trace = (label: string) => (value: number) => {
	console.log(`${label}: ${value}`);
	return value;
};

const compose =
	(...fns: Function[]) =>
	(x: number) => {
		console.log('x in compose =>', x);
		return fns.reduceRight((y, f) => f(y), x);
	};

const pipe =
	(...fns: Function[]) =>
	(x: number) => {
		console.log('x in pipe => ', x);
		return fns.reduce((y, f) => f(y), x);
	};

// const composed = compose(
// 	trace('compose end'),
// 	inc,
// 	trace('compose middle'),
// 	inc,
// 	trace('compose start')
// )(11);

// const piped = pipe(trace('pipe start'), inc, trace('pipe middle'), inc, trace('pipe end'))(11);

export { compose, pipe, trace, add, inc, inc10, inc20 };
