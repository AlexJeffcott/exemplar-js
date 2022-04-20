import { buildSync } from 'esbuild';

const opts = {
	bundle: true,
	write: true,
	minify: true,
	sourcemap: true,
	format: 'esm',
	platform: 'node',
	target: 'node16'
};

const nonTestOpts = {
	entryPoints: ['./src/index.ts'],
	outdir: './build'
};

buildSync({ ...opts, ...nonTestOpts });

export default opts;
