import { buildSync } from 'esbuild';

buildSync({
	entryPoints: ['./src/index.ts'],
	bundle: true,
	write: true,
	minify: true,
	sourcemap: true,
	format: 'esm',
	platform: 'node',
	target: 'node16',
	outdir: './build'
});
