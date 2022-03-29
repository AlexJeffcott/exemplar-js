https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm

import { ParseAnnotate } from './parseAnnotate';

const insensitive = new Map([
['123', ['abc']],
['456', ['def']],
['789', ['abc d']]
]);
const sensitive = new Map([
['321', ['XYZ']],
['654', ['WWW']]
]);

const opts = { tag: 'x-annotate' };

const parseAnnotate = new ParseAnnotate(insensitive, sensitive, opts);

export const annotate = (txt: string): string[] => {
const extractedMatchIds = parseAnnotate.extractMatchIds(txt);
// console.log('===> extractedMatchIds', extractedMatchIds)

    // const txtWithReplacedKws = parseAnnotate.replaceKws(txt)
    // console.log('===> txtWithreplacedKws', txtWithReplacedKws)
    //
    // const extractedDirtyMatchMap = parseAnnotate.extractDirtyMatches(txt)
    // console.log('===> extractedDirtyMatchMap', extractedDirtyMatchMap)

    return extractedMatchIds;

};

const txt = 'this is abc an example abcdef ghi defabc Abc abc d XYZ. www.';
annotate(txt);

// annotate should take
// const caseInsensitive = new Map([['123', 'abc'], ['456', 'def'], ['789', 'abc d']])
// const caseSensitive = new Map([['321', 'GHI']])
// const annotate = new annotation(caseInsensitive, caseSensitive)
// // case sensitive kws are added as is
// // case insensitive kws are added uppercased and lowercased
// const txt = 'this is abc an example abcdef ghi defabc Abc abc d.'
// annotate.getDirtyMatchMap(txt) => new Map([['123', 'abc'], ['123', 'Abc'], ['789', 'abc d']])
// annotate.getCleanMatchMap(txt) => new Map([['123', 'abc'], ['789', 'abc d']])
// annotate.extractMatchIds(txt) => ['123', '789']
// annotate. split(txt) => ['this is ', 'abc', ' an example abcdef ghi defabc ', 'Abc', ' ', 'abc d', '.']
// annotate.embellish(txt, 'x-annotate') => 'this is <x-annotate id="123">abc<\x-annotate> an example abcdef defabc <x-annotate id="123">Abc<\x-annotate> <x-annotate id"789">abc d<\x-annotate>.'
// finds longest case insensitive matches in text and returns a deduped map with the case sensitive matches and ids OR a deduped map with matches and ids OR a deduped list of ids OR an embellished html string.
// walkdom with embellish
// n => n.innerHtml = annotate.embellish(n.textContent, 'x-annotate' )
// walkdom with getDirtyMatchMap
// n => {
// const matches = annotate.getDirtyMatchMap(n.textContent)
// matches.forEach(m =>
// }
// amboss
// eyes
// +1
//
//
//
//
//
// 17:26
// Alex Jeffcott (ajt):house_with_garden: annotate.replace(txt) => modified text
// annotate.emblsh`${txt}`
// annotate.rplc`${txt}`
// 19:19
// Alex Jeffcott (ajt):house_with_garden:
