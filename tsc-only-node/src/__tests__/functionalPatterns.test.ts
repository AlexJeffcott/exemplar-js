import { expect } from 'chai';
import forEach from 'mocha-each';

import { compose, pipe, add, inc, inc10, inc20, trace } from '../functionalPatterns';

describe('functional pattern method', () => {
	describe('add() should', () => {
		it('add correctly', () => {
			const res = add(1)(1);
			expect(res).to.equal(2);
		});
	});
	describe('inc() should', () => {
		it('inc correctly', () => {
			const res = inc(1);
			expect(res).to.equal(2);
		});
	});
	describe('inc10() should', () => {
		it('inc10 correctly', () => {
			const res = inc10(1);
			expect(res).to.equal(11);
		});
	});
	describe('inc20() should', () => {
		it('inc20 correctly', () => {
			const res = inc20(1);
			expect(res).to.equal(21);
		});
	});
	describe('compose() should', () => {
		it('compose correctly', () => {
			const res = compose(inc, inc)(11);
			expect(res).to.equal(13);
		});
	});
	describe('pipe() should', () => {
		it('pipe correctly', () => {
			const res = pipe(inc, inc)(11);
			expect(res).to.equal(13);
		});
	});

	describe('trace() should', () => {
		// forEach uses sprintf - https://github.com/alexei/sprintf.js
		forEach([
			[9, 'Good morning'],
			[3, 'Goodbye']
		]).it('trace "%d" with %s message correctly', (expected: number, message: string) => {
			const res = trace(message)(expected);
			expect(res).equal(expected);
		});
	});
});
