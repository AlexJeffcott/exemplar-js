import { ParseAnnotate } from 'annotate';

const insensitive = new Map([
    ['1', ['consectetur']],
    ['2', ['diam']],
    ['3', ['ipsum']],
    ['4', ['ante']],
    ['5', ['amet']],
    ['6', ['erat']],
]);

const sensitive = new Map([
    ['7', ['LEO']],
]);

const opts = { tag: 'x-annotate' };

export const annotate = new ParseAnnotate(insensitive, sensitive, opts);
