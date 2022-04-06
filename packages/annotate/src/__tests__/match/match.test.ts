import { expect } from 'chai';
import { Match } from '../../';

const insensitive = new Map([
	['123', ['abc']],
	['456', ['def']],
	['789', ['abc d']]
]);
const sensitive = new Map([
	['321', ['XYZ']],
	['654', ['WWW']]
]);

const opts = { tag: 'x-a' };

const match = new Match(insensitive, sensitive, opts);

describe('annotate with', () => {
	describe('text ending in full stop should', () => {
		const txt = 'an abc abc who was Def or abcd xyz WWW.';
		const extractedMatchIds = ['123', '456', '654'];
		const replacedKws = 'an 123 123 who was 456 or abcd xyz 654.';
		const extractedDirtyMatches = new Map([
			['123', 'abc'],
			['456', 'Def'],
			['654', 'WWW']
		]);
		const wrappedKwsWithHtml =
			'an <x-a id="123">abc</x-a> <x-a id="123">abc</x-a> who was <x-a id="456">Def</x-a> or abcd xyz <x-a id="654">WWW</x-a>.';

		it('extractMatchIds correctly', () => {
			const res = match.extractMatchIds(txt);
			expect(JSON.stringify(res)).to.equal(JSON.stringify(extractedMatchIds));
		});

		it('replaceKws correctly', () => {
			const res = match.replaceKws(txt);
			expect(res).to.equal(replacedKws);
		});

		it('extractDirtyMatches correctly', () => {
			const res = match.extractDirtyMatches(txt);
			expect(res).to.deep.equal(extractedDirtyMatches);
		});

		it('wrapKwsWithHtml correctly', () => {
			const res = match.wrapKwsWithHtml(txt);
			expect(res).to.equal(wrappedKwsWithHtml);
		});
	});
	describe('text ending with non-whitespace char should', () => {
		const txt = 'an abc abc who was Def or abcd xyz WWW';
		const extractedMatchIds = ['123', '456', '654'];
		const replacedKws = 'an 123 123 who was 456 or abcd xyz 654';
		const extractedDirtyMatches = new Map([
			['123', 'abc'],
			['456', 'Def'],
			['654', 'WWW']
		]);
		const wrappedKwsWithHtml =
			'an <x-a id="123">abc</x-a> <x-a id="123">abc</x-a> who was <x-a id="456">Def</x-a> or abcd xyz <x-a id="654">WWW</x-a>';

		it('extractMatchIds correctly', () => {
			const res = match.extractMatchIds(txt);
			expect(JSON.stringify(res)).to.equal(JSON.stringify(extractedMatchIds));
		});

		it('replaceKws correctly', () => {
			const res = match.replaceKws(txt);
			expect(res).to.equal(replacedKws);
		});

		it('extractDirtyMatches correctly', () => {
			const res = match.extractDirtyMatches(txt);
			expect(res).to.deep.equal(extractedDirtyMatches);
		});

		it('wrapKwsWithHtml correctly', () => {
			const res = match.wrapKwsWithHtml(txt);
			expect(res).to.equal(wrappedKwsWithHtml);
		});
	});
});
